import { access, copyFile, mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public", "images", "screenshots");
const downloadDir = path.join(root, "public", "downloads");
const logoOut = path.join(root, "public", "images", "ctk-logo.webp");
const pdfOut = path.join(
  downloadDir,
  "CTK-ChurchSuite-Simplified-Staff-Guide-V1.pdf",
);

const sourceCandidates = [
  process.env.CTK_IMAGE_SOURCE,
  path.join(root, ".scratch", "zip_probe", "ChurchSuiteDocs_Images"),
  path.resolve(root, "..", "Pictures", "Screenshots", "ChurchSuiteDocs_Images"),
  "c:\\Users\\nikka\\Pictures\\Screenshots\\ChurchSuiteDocs_Images",
].filter(Boolean);

const pdfCandidates = [
  process.env.CTK_PDF_SOURCE,
  path.resolve(root, "..", "CTK ChurchSuite Simplfied Staff Guide - V1.pdf"),
  "c:\\Users\\nikka\\Documents\\CTK_Documents\\CTK ChurchSuite Simplfied Staff Guide - V1.pdf",
].filter(Boolean);

const files = [
  ["AddMinistry-Popup.png", "addministry-popup"],
  ["Addressbook-Contacts-AddContact.png", "addressbook-contacts-addcontact"],
  ["Addressbook-Contacts-Addtag2contact.png", "addressbook-contacts-addtag2contact"],
  ["Addressbook-Contacts-AddtagPopup.png", "addressbook-contacts-addtagpopup"],
  ["Addressbook-Contacts-Notes.png", "addressbook-contacts-notes"],
  ["Addressbook-Contacts-Searchbar.png", "addressbook-contacts-searchbar"],
  ["Addressbook-Forms-Responses.png", "addressbook-forms-responses"],
  ["Addressbook-Forms-ViewReponseOptions.png", "addressbook-forms-viewreponseoptions"],
  ["Addressbook-Forms-ViewResponse.png", "addressbook-forms-viewresponse"],
  ["Addressbook-Forms.png", "addressbook-forms"],
  [
    "Addressbook-Reports-DataCleansing-DuplicateContacts.png",
    "addressbook-reports-datacleansing-duplicatecontacts",
  ],
  ["Addressbook-Reports-DataCleansing.png", "addressbook-reports-datacleansing"],
  ["Ministries-AddMinistries-Popup.png", "ministries-addministries-popup"],
  ["Ministries-AddOverSeer-Popup.png", "ministries-addoverseer-popup"],
  ["Ministries-AddTeamMember.png", "ministries-addteammember"],
  ["Ministries-Ministries-AddMember.png", "ministries-ministries-addmember"],
  ["Ministries-Ministries-AssignOverseers.png", "ministries-ministries-assignoverseers"],
  ["Ministries-Ministries-Roles&AddRole.png", "ministries-ministries-roles-addrole"],
  ["Ministries-Ministries-Tap2EditMinistry.png", "ministries-ministries-tap2editministry"],
  ["Ministries-Ministries-Teams&AddTeams.png", "ministries-ministries-teams-addteams"],
  ["Ministries-Minstries-AddMinistries.png", "ministries-minstries-addministries"],
  [
    "Ministries-Roster-EditDates-Options-SwapMember.png",
    "ministries-roster-editdates-options-swapmember",
  ],
  ["Ministries-Roster-EditDates.png", "ministries-roster-editdates"],
  ["Ministries-Rosters-AddRoster.png", "ministries-rosters-addroster"],
  ["Ministries-Rosters-AddRosterMember.png", "ministries-rosters-addrostermember"],
  ["Ministries-Rosters-PublishRoster.png", "ministries-rosters-publishroster"],
  ["Ministries-Rosters-SendRoster.png", "ministries-rosters-sendroster"],
];

async function firstExisting(candidates, label) {
  for (const candidate of candidates) {
    try {
      await access(candidate);
      return candidate;
    } catch {
      // Keep looking.
    }
  }

  throw new Error(`Could not find ${label}. Tried:\n${candidates.join("\n")}`);
}

async function convertScreenshots(sourceDir) {
  await mkdir(outDir, { recursive: true });
  const present = new Set(await readdir(sourceDir));

  for (const [inputName, outputName] of files) {
    if (!present.has(inputName)) {
      throw new Error(`Missing source image: ${inputName}`);
    }

    const src = path.join(sourceDir, inputName);
    const out = path.join(outDir, `${outputName}.webp`);
    await sharp(src)
      .webp({ quality: 84, effort: 6 })
      .toFile(out);
    console.log(`converted ${inputName} -> ${outputName}.webp`);
  }
}

async function copyPdf(pdfSource) {
  await mkdir(downloadDir, { recursive: true });
  await copyFile(pdfSource, pdfOut);
  console.log(`copied PDF -> ${path.relative(root, pdfOut)}`);
}

async function downloadLogo() {
  const logoUrl =
    "https://i0.wp.com/ctkdartmouth.com/wp-content/uploads/2021/09/logo-y-1.png?fit=1548%2C951&ssl=1";

  try {
    const response = await fetch(logoUrl);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const buffer = Buffer.from(await response.arrayBuffer());
    await sharp(buffer)
      .resize({ width: 240, withoutEnlargement: true })
      .webp({ quality: 88, effort: 6 })
      .toFile(logoOut);
    console.log(`downloaded logo -> ${path.relative(root, logoOut)}`);
  } catch (error) {
    console.warn(`could not download CTK logo: ${error.message}`);
  }
}

const sourceDir = await firstExisting(sourceCandidates, "ChurchSuite screenshot source directory");
const pdfSource = await firstExisting(pdfCandidates, "source PDF");

await convertScreenshots(sourceDir);
await copyPdf(pdfSource);
await downloadLogo();
