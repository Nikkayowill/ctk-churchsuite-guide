export const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`;

const screenshotPath = (file) => assetPath(`images/screenshots/${file}.webp`);

export const screenshots = {
  "addressbook-contacts-searchbar": {
    src: screenshotPath("addressbook-contacts-searchbar"),
    width: 1808,
    height: 413,
    alt: "ChurchSuite Address Book contacts search bar.",
  },
  "addressbook-contacts-addcontact": {
    src: screenshotPath("addressbook-contacts-addcontact"),
    width: 1792,
    height: 338,
    alt: "ChurchSuite Address Book Add Contact button.",
  },
  "addressbook-forms": {
    src: screenshotPath("addressbook-forms"),
    width: 1780,
    height: 570,
    alt: "ChurchSuite Address Book Forms area.",
  },
  "addressbook-forms-responses": {
    src: screenshotPath("addressbook-forms-responses"),
    width: 1776,
    height: 853,
    alt: "ChurchSuite form responses tab.",
  },
  "addressbook-forms-viewresponse": {
    src: screenshotPath("addressbook-forms-viewresponse"),
    width: 1779,
    height: 831,
    alt: "ChurchSuite view response panel.",
  },
  "addressbook-forms-viewreponseoptions": {
    src: screenshotPath("addressbook-forms-viewreponseoptions"),
    width: 1721,
    height: 551,
    alt: "ChurchSuite response options menu.",
  },
  "addressbook-contacts-addtag2contact": {
    src: screenshotPath("addressbook-contacts-addtag2contact"),
    width: 1789,
    height: 908,
    alt: "ChurchSuite contact profile showing tag area.",
  },
  "addressbook-contacts-addtagpopup": {
    src: screenshotPath("addressbook-contacts-addtagpopup"),
    width: 1140,
    height: 560,
    alt: "ChurchSuite add to tag popup.",
  },
  "addressbook-contacts-notes": {
    src: screenshotPath("addressbook-contacts-notes"),
    width: 1789,
    height: 908,
    alt: "ChurchSuite contact notes area.",
  },
  "addressbook-reports-datacleansing": {
    src: screenshotPath("addressbook-reports-datacleansing"),
    width: 1791,
    height: 868,
    alt: "ChurchSuite Address Book data cleansing report area.",
  },
  "addressbook-reports-datacleansing-duplicatecontacts": {
    src: screenshotPath("addressbook-reports-datacleansing-duplicatecontacts"),
    width: 1783,
    height: 648,
    alt: "ChurchSuite duplicated contacts report.",
  },
  "ministries-minstries-addministries": {
    src: screenshotPath("ministries-minstries-addministries"),
    width: 1781,
    height: 555,
    alt: "ChurchSuite Ministries add ministry button.",
  },
  "addministry-popup": {
    src: screenshotPath("addministry-popup"),
    width: 725,
    height: 924,
    alt: "ChurchSuite add ministry popup.",
  },
  "ministries-ministries-tap2editministry": {
    src: screenshotPath("ministries-ministries-tap2editministry"),
    width: 1329,
    height: 549,
    alt: "ChurchSuite ministry overview showing where to open a ministry.",
  },
  "ministries-ministries-assignoverseers": {
    src: screenshotPath("ministries-ministries-assignoverseers"),
    width: 1325,
    height: 716,
    alt: "ChurchSuite assign overseers area.",
  },
  "ministries-addoverseer-popup": {
    src: screenshotPath("ministries-addoverseer-popup"),
    width: 915,
    height: 338,
    alt: "ChurchSuite add overseer popup.",
  },
  "ministries-ministries-roles-addrole": {
    src: screenshotPath("ministries-ministries-roles-addrole"),
    width: 1306,
    height: 433,
    alt: "ChurchSuite ministry roles area with add role option.",
  },
  "ministries-ministries-teams-addteams": {
    src: screenshotPath("ministries-ministries-teams-addteams"),
    width: 1200,
    height: 687,
    alt: "ChurchSuite ministry teams area.",
  },
  "ministries-addteammember": {
    src: screenshotPath("ministries-addteammember"),
    width: 832,
    height: 355,
    alt: "ChurchSuite add team popup.",
  },
  "ministries-ministries-addmember": {
    src: screenshotPath("ministries-ministries-addmember"),
    width: 1290,
    height: 682,
    alt: "ChurchSuite add member to ministry team area.",
  },
  "ministries-rosters-addroster": {
    src: screenshotPath("ministries-rosters-addroster"),
    width: 1221,
    height: 450,
    alt: "ChurchSuite Rosters add roster button.",
  },
  "ministries-addministries-popup": {
    src: screenshotPath("ministries-addministries-popup"),
    width: 810,
    height: 887,
    alt: "ChurchSuite add roster popup.",
  },
  "ministries-rosters-addrostermember": {
    src: screenshotPath("ministries-rosters-addrostermember"),
    width: 971,
    height: 559,
    alt: "ChurchSuite add roster member popup.",
  },
  "ministries-rosters-publishroster": {
    src: screenshotPath("ministries-rosters-publishroster"),
    width: 1793,
    height: 785,
    alt: "ChurchSuite roster publish action.",
  },
  "ministries-rosters-sendroster": {
    src: screenshotPath("ministries-rosters-sendroster"),
    width: 1247,
    height: 888,
    alt: "ChurchSuite send roster popup.",
  },
  "ministries-roster-editdates": {
    src: screenshotPath("ministries-roster-editdates"),
    width: 1761,
    height: 562,
    alt: "ChurchSuite roster date calendar area.",
  },
  "ministries-roster-editdates-options-swapmember": {
    src: screenshotPath("ministries-roster-editdates-options-swapmember"),
    width: 1262,
    height: 607,
    alt: "ChurchSuite roster member options menu.",
  },
};

export const guide = {
  title: "ChurchSuite Simplified",
  subtitle: "A practical ChurchSuite guide for CTK Dartmouth staff and volunteers",
  version: "V1",
  downloadHref: assetPath("downloads/CTK-ChurchSuite-Simplified-Staff-Guide-V1.pdf"),
  logoHref: assetPath("images/ctk-logo.webp"),
  heroImage: screenshots["addressbook-forms-viewresponse"].src,
  stats: [
    { value: "32", label: "source pages" },
    { value: "27", label: "screenshots" },
    { value: "19", label: "workflows" },
  ],
  preface: {
    title: "Before you use this guide",
    paragraphs: [
      "This guide has been created as a simplified, practical reference for parish staff and volunteers within the Archdiocese of Halifax-Yarmouth, specifically Christ the King Parish Dartmouth.",
      "Its purpose is to provide clear, step-by-step instructions for the most common ChurchSuite tasks encountered in parish ministry, with a focus on real workflows and real scenarios that arise in day-to-day parish operations.",
      "This document is not intended to replace or replicate the official ChurchSuite documentation. Instead, it complements it by offering straightforward guidance tailored to how our parishes typically use ChurchSuite in practice.",
      "For full feature explanations, advanced options, or system-wide guidance, staff should refer to ChurchSuite's official support materials.",
    ],
  },
  intro: {
    paragraphs: [
      "Use the web guide for quick step-by-step help during parish work. Use the PDF when you need an offline copy, a printout, or something easier to share in a meeting.",
      "Each section is organized around the task someone is trying to complete, with screenshots placed beside the steps where they matter most.",
    ],
    lookFor: [
      "Steps: numbered instructions for completing a task.",
      "Staff notes: important reminders or best practices.",
      "Examples: real parish scenarios to help you understand context.",
      "Screenshots: visual references to help you follow along.",
      "Demo links: short walkthroughs can be added when available.",
    ],
    audience:
      "Parish staff, ministry leaders, and volunteers who need a simplified, practical reference for common ChurchSuite tasks.",
    useThisGuide: [
      "When you need quick, step-by-step instructions.",
      "When you want to understand how parishes in the archdiocese use ChurchSuite.",
      "When you need a visual reference or example.",
    ],
    officialDocs: [
      "When you need advanced features.",
      "When you want full system explanations.",
      "When you need troubleshooting or technical details.",
    ],
  },
  sections: [
    {
      id: "address-book",
      kicker: "Module 01",
      title: "Address Book Tasks",
      description:
        "The Address Book is where parish contact records are stored in ChurchSuite. This may include parishioners, newcomers, volunteers, ministry contacts, and other adults connected to the parish.",
      body:
        "This area helps staff keep contact information organized, support follow-up, and avoid relying on scattered emails, paper notes, or separate lists.",
      tasks: [
        {
          id: "add-new-person",
          title: "1.1 Add a New Person Manually",
          context: [
            "Use this when someone needs to be added manually as a parishioner, newcomer, volunteer, ministry contact, or follow-up contact.",
          ],
          callouts: [
            {
              title: "Important",
              body:
                "Always search before adding a new contact. Duplicate records can cause confusion and may affect ChurchSuite costs, since active Address Book contacts are part of the subscription calculation.",
            },
          ],
          steps: [
            "Open ChurchSuite.",
            "Go to Address Book.",
            "Select Contacts.",
            {
              text: "Search for the person by name, email, or phone number.",
              images: [
                {
                  key: "addressbook-contacts-searchbar",
                  caption: "Search first so you do not create a duplicate contact.",
                },
              ],
            },
            {
              text: "If no matching contact is found, click Add Contact.",
              images: [
                {
                  key: "addressbook-contacts-addcontact",
                  caption: "Use Add Contact only after checking for existing records.",
                },
              ],
            },
            "Enter the person's basic details.",
            "Save the contact information.",
            "Open the new contact profile and review the details.",
            "Add any helpful tags, such as Newcomer, New Parishioner, or Follow-Up Needed.",
            "Add a short note if follow-up is needed.",
          ],
          staffNote:
            "Only enter information that is necessary for parish follow-up. Do not add sensitive personal information unless there is a clear reason and permission to store it.",
        },
        {
          id: "find-existing-person",
          title: "1.2 Find an Existing Person",
          context: [
            "Use this when you need to look up someone's contact details or check if they are already in ChurchSuite.",
          ],
          steps: [
            "Open ChurchSuite.",
            "Go to Address Book.",
            "Select Contacts.",
            {
              text: "Search by name, email, or phone number.",
              images: [
                {
                  key: "addressbook-contacts-searchbar",
                  caption: "The contact search supports name, email, and phone lookup.",
                },
              ],
            },
            "Click the correct person from the results.",
            "Review their contact record.",
            "Follow up with the contact if needed.",
          ],
          staffNote:
            "Always search before adding a new person to avoid duplicating records.",
        },
        {
          id: "review-form-responses",
          title: "1.3 Review Form Responses",
          context: [
            "Use this when someone submits information through a ChurchSuite form, such as a newcomer form, parish registration form, or contact update form.",
          ],
          steps: [
            "Open ChurchSuite.",
            "Go to Address Book.",
            {
              text: "Select Forms.",
              images: [
                {
                  key: "addressbook-forms",
                  caption: "Open Forms from the Address Book area.",
                },
              ],
            },
            "Select the form you want to review.",
            {
              text: "Open the Responses tab.",
              images: [
                {
                  key: "addressbook-forms-responses",
                  caption: "Review the newest responses first.",
                },
              ],
            },
            "Review the newest responses first.",
            "Check whether the response is already linked to a person.",
            {
              text:
                "Open the contact response and review the pop-up options shown by ChurchSuite.",
              images: [
                {
                  key: "addressbook-forms-viewresponse",
                  caption: "Open the response row options and choose View.",
                },
                {
                  key: "addressbook-forms-viewreponseoptions",
                  caption: "The response opens in a popup with follow-up actions.",
                },
              ],
            },
            "If it is not linked, edit the link to the correct person or add them as a new contact.",
          ],
          staffNote:
            "Search first before adding a new contact. This helps avoid duplicate records.",
        },
        {
          id: "add-notes-tags",
          title: "1.4 Add Notes and Tags",
          context: [
            "Use tags when a person needs follow-up, extra context, or a simple label that helps staff find or organize them later.",
          ],
          definitions: [
            {
              term: "Tag",
              definition: "A simple label used to group or identify people in ChurchSuite.",
            },
            {
              term: "Note",
              definition: "A short internal comment added to a person's record.",
            },
            {
              term: "Example tags",
              definition:
                "Newcomer, Follow-Up Needed, Volunteer Interest, Music Ministry, Hospitality.",
            },
          ],
          steps: [
            "Open ChurchSuite.",
            "Go to Address Book.",
            "Select Contacts.",
            {
              text: "Search for the person by name.",
              images: [
                {
                  key: "addressbook-contacts-searchbar",
                  caption: "Search for the contact before adding tags or notes.",
                },
              ],
            },
            "Open the person's contact record by clicking their name.",
            {
              text: "Look for the Tags section on the contact record.",
              images: [
                {
                  key: "addressbook-contacts-addtag2contact",
                  caption: "The contact record includes the Tags section.",
                },
              ],
            },
            "Click Add to tag.",
            {
              text: "Select the correct tag from the list, or create a new tag if needed.",
              images: [
                {
                  key: "addressbook-contacts-addtagpopup",
                  caption: "Choose an existing tag or create one when appropriate.",
                },
              ],
            },
            {
              text: "Look for the Notes section on the contact record.",
              images: [
                {
                  key: "addressbook-contacts-notes",
                  caption: "Use Notes for short, factual follow-up context.",
                },
              ],
            },
            "Click to add a new note.",
            "Write a short, clear note if extra context is needed.",
            "Save the changes.",
          ],
          staffNote:
            "Keep tags and notes simple. Use tags for categories. Use notes for short context.",
        },
        {
          id: "resolve-duplicates",
          title: "1.5 Resolve Duplicate Contacts",
          context: [
            "Use this when you search for a person and find more than one contact record that may belong to the same person.",
            "Duplicate contacts can split important information across different records, including contact details, notes, tags, form responses, ministry involvement, and roster history. Each active contact can also affect subscription cost.",
          ],
          steps: [
            "Open ChurchSuite.",
            "Go to Address Book.",
            "Go to Reports.",
            {
              text: "Look for the Data Cleansing section.",
              images: [
                {
                  key: "addressbook-reports-datacleansing",
                  caption: "Data Cleansing is where duplicate record tools are found.",
                },
              ],
            },
            {
              text: "Open Duplicated Contacts.",
              images: [
                {
                  key: "addressbook-reports-datacleansing-duplicatecontacts",
                  caption:
                    "The available actions may include Ignore, Undo ignore, or Merge, depending on permissions and record status.",
                },
              ],
            },
            "Review the possible duplicate records.",
            "Compare details such as name, email, phone number, address, notes, tags, and ministry involvement.",
            "If the records are not the same person, choose Ignore.",
            "If the records are confirmed duplicates, use Merge.",
            "Carefully choose which contact should be kept and which one should be deleted.",
            "Review the details before saving the merge.",
          ],
          staffNote:
            "Merging contacts cannot be undone. Only merge contacts when you are sure they are duplicates, or after checking with the office/admin lead.",
        },
        {
          id: "address-book-best-practices",
          title: "1.6 Address Book Best Practices",
          context: [
            "Use this as a reminder for keeping Address Book records clean and consistent.",
          ],
          stepsTitle: "Best practices",
          ordered: false,
          steps: [
            "Search before adding a new person.",
            "Avoid creating duplicate contacts.",
            "Keep names, phone numbers, and email addresses accurate.",
            "Use tags consistently.",
            "Keep notes short, respectful, and factual.",
            "Only record information that is needed for parish follow-up.",
            "Do not add sensitive details unless there is a clear reason and permission.",
            "Mark form responses as handled once they have been reviewed.",
          ],
          staffNote:
            "The Address Book should make parish follow-up easier, not more complicated. Keep records simple, clean, and useful.",
        },
      ],
    },
    {
      id: "ministries-rosters",
      kicker: "Module 02",
      title: "Ministries/Rosters",
      description:
        "This section explains how CTK can organize ministry areas, serving roles, ministry teams, and roster responsibilities.",
      body:
        "Ministries may include areas such as music, hospitality, readers, altar servers, livestream/media, children's ministry, or other volunteer groups.",
      tasks: [
        {
          id: "adding-new-ministry",
          title: "2.1 Add a New Ministry",
          context: [
            "Use this when a new serving area needs to be created, such as Music, Hospitality, Readers, Altar Servers, Livestream/Media, or Children's Ministry.",
            "Once you click the add ministries tab, ChurchSuite opens a form to fill out.",
          ],
          steps: [
            "Open ChurchSuite.",
            "On the top menu, go to Ministries.",
            "In the Ministries section, use the left or bottom navigation to select Ministries.",
            {
              text: "Click Add Ministry.",
              images: [
                {
                  key: "ministries-minstries-addministries",
                  caption: "The Add Ministry action is inside the Ministries area.",
                },
              ],
            },
            "Enter the ministry name.",
            "Add a short description if needed.",
            {
              text: "Choose between Ad Hoc, Serve 13, and Simple Rotation.",
              images: [
                {
                  key: "addministry-popup",
                  caption:
                    "The add ministry form includes serving times, team rotation, and repeat roster settings.",
                },
              ],
            },
          ],
          fieldNotes: [
            "Ad Hoc means staff manually choose who serves on each roster date.",
            "Simple Rotation means teams rotate in a set order.",
            "Serve 13 should only be used if staff know this is the correct parish pattern.",
            "Repeat Roster is used when the roster repeats regularly.",
          ],
          staffNote:
            "Keep ministry names simple and clear. Avoid creating a new ministry unless it represents a real serving area.",
        },
        {
          id: "assign-overseers",
          title: "2.2 Assign Ministry Overseers",
          context: [
            "Use this when a ministry needs one or more trusted people to help manage the ministry's rosters and serving teams.",
          ],
          steps: [
            "Open ChurchSuite.",
            "On the top menu, go to Ministries.",
            "In the Ministries section, use the left or bottom navigation to select Ministries.",
            {
              text: "Open the ministry you want to manage.",
              images: [
                {
                  key: "ministries-ministries-tap2editministry",
                  caption: "Open the ministry record before managing settings.",
                },
              ],
            },
            "Look for the Overseers area.",
            {
              text: "Click to add or manage overseers.",
              images: [
                {
                  key: "ministries-ministries-assignoverseers",
                  caption: "The Overseers area controls who can help manage the ministry.",
                },
              ],
            },
            "Search for the person you want to assign.",
            {
              text: "Select the correct person.",
              images: [
                {
                  key: "ministries-addoverseer-popup",
                  caption: "Search and select the overseer carefully.",
                },
              ],
            },
            "Save the changes.",
            "Review the ministry to make sure the correct overseer has been added.",
          ],
          staffNote:
            "Only assign overseers who should help manage that ministry. Overseers may have extra ability to manage rosters for their ministry.",
        },
        {
          id: "manage-roles",
          title: "2.3 Manage Ministry Roles",
          context: [
            "Use this when a ministry needs clear serving roles, such as Singer, Instrumentalist, Reader, Greeter, Team Lead, Sacristan, or Livestream/Media.",
          ],
          steps: [
            "Open ChurchSuite.",
            "On the top menu, go to Ministries.",
            "In the Ministries section, use the bottom navigation to select Ministries.",
            "Open the ministry you want to edit.",
            {
              text: "Look for the Roles area.",
              images: [
                {
                  key: "ministries-ministries-roles-addrole",
                  caption: "Roles keep service assignments clear and consistent.",
                },
              ],
            },
            "Click to add or manage roles.",
            "Enter the role name.",
            "Save the role.",
            "Repeat this for any other roles needed in that ministry.",
          ],
          staffNote:
            "Keep role names simple and consistent. For example, use Singer and Instrumentalist instead of creating too many slightly different role names.",
        },
        {
          id: "manage-teams",
          title: "2.4 Manage Ministry Teams",
          context: [
            "Use this when a ministry needs to organize people into teams, such as different Mass times, service groups, or rotating volunteer groups.",
          ],
          steps: [
            "Open ChurchSuite.",
            "On the top menu, go to Ministries.",
            "In the Ministries section, use the bottom navigation to select Ministries.",
            "Open the ministry you want to manage.",
            {
              text: "Look for the Teams area.",
              images: [
                {
                  key: "ministries-ministries-teams-addteams",
                  caption: "Teams group people inside a ministry.",
                },
              ],
            },
            "Click Add Team or the option to manage teams.",
            {
              text: "Enter the team's name.",
              images: [
                {
                  key: "ministries-addteammember",
                  caption: "Name the team clearly so staff can recognize it later.",
                },
              ],
            },
            {
              text: "Add people to the team.",
              images: [
                {
                  key: "ministries-ministries-addmember",
                  caption: "Add the correct members before assigning roles.",
                },
              ],
            },
            "Assign roles to team members if needed.",
            "Save the changes.",
          ],
        },
        {
          id: "create-roster",
          title: "2.5 Create a Roster",
          context: [
            "Use this when a ministry needs a serving schedule for a date range, such as a term, season, month, or special event.",
          ],
          callouts: [
            {
              title: "Before you start",
              body:
                "The ministry should already be created first. If the ministry has teams, members, or roles, those should be set up before creating the roster.",
            },
          ],
          stepsTitle: "Follow along",
          steps: [
            "Open ChurchSuite.",
            "On the top menu, go to Ministries.",
            {
              text: "On the bottom menu, go to Rosters and select Add roster.",
              images: [
                {
                  key: "ministries-rosters-addroster",
                  caption: "Start a new serving schedule from the Rosters area.",
                },
              ],
            },
            "Choose the ministry the roster is for.",
            {
              text: "Link the roster to the correct ministry or event.",
              images: [
                {
                  key: "ministries-addministries-popup",
                  caption:
                    "The Add roster form collects ministry, name, service, dates, days, times, and clash settings.",
                },
              ],
            },
            "Choose the start and end dates.",
            "Set how often the roster repeats.",
            "Review the clash setting. This helps ChurchSuite warn staff if a person is already scheduled to serve somewhere else at the same time.",
            "Save the roster.",
            {
              text: "Add roster members or teams if the roster needs named people assigned.",
              images: [
                {
                  key: "ministries-rosters-addrostermember",
                  caption:
                    "Use the roster member popup when assigning people to a roster date.",
                },
              ],
            },
            "Check for warnings, such as clashes or unavailable people.",
            "When the roster is complete, publish it.",
            {
              text: "Use Communicate to send the roster by email if needed.",
              images: [
                {
                  key: "ministries-rosters-sendroster",
                  caption:
                    "Review the recipients, date range, and message before sending the roster.",
                },
              ],
            },
          ],
          staffNote:
            "Before publishing, review the roster carefully to make sure people are not double-booked or scheduled when unavailable.",
        },
        {
          id: "publish-roster",
          title: "2.6 Publish a Roster",
          context: [
            "Use this when a roster is complete and ready to be shared with the people serving.",
          ],
          steps: [
            "Open ChurchSuite.",
            "On the top menu, go to Ministries and on the bottom menu click Rosters.",
            "Open the roster you want to review or create one if it does not exist yet.",
            "Check the names, dates, roles, clashes, and unavailable people.",
            {
              text: "Click Publish when the roster is ready.",
              images: [
                {
                  key: "ministries-rosters-publishroster",
                  caption: "Publish only after the roster has been reviewed.",
                },
              ],
            },
            "Confirm the publishing action if prompted.",
            "After the roster is published, click Send Roster.",
            {
              text: "Review the date range, recipients, subject, and send it.",
              images: [
                {
                  key: "ministries-rosters-sendroster",
                  caption: "The Send Roster screen controls the outgoing message.",
                },
              ],
            },
          ],
          staffNote:
            "Only publish the roster once it has been checked. Publishing makes the roster visible to the people serving.",
        },
        {
          id: "edit-roster-date",
          title: "2.7 Edit a Roster Date",
          context: [
            "Use this when someone needs to be removed, replaced, or changed on a specific roster date.",
          ],
          steps: [
            "Open ChurchSuite.",
            "On the top menu, go to Ministries, then use the bottom menu to go to Rosters.",
            "Scroll down the page a bit to see the calendar view and open the roster you need to update.",
            {
              text: "Find the date that needs to be changed.",
              images: [
                {
                  key: "ministries-roster-editdates",
                  caption: "Use the roster date view to find the service date.",
                },
              ],
            },
            "Find the person scheduled for that date.",
            {
              text: "Use the options menu beside their name to remove or change them.",
              images: [
                {
                  key: "ministries-roster-editdates-options-swapmember",
                  caption: "The options menu can be used for date-specific changes.",
                },
              ],
            },
            "Add a replacement person if needed.",
            "Check for warnings, such as clashes or unavailability.",
            "Save the change.",
            "If the roster was already published, notify the people affected by the change.",
          ],
          staffNote:
            "Only edit the specific roster date that needs to be changed. If the roster has already been published, make sure the affected people are notified after the update.",
        },
      ],
    },
    {
      id: "staff-situations",
      kicker: "Module 03",
      title: "Common Staff Situations",
      description:
        "This section explains what staff can do in common parish situations.",
      body:
        "These steps connect the different parts of ChurchSuite together instead of only explaining one feature at a time.",
      tasks: [
        {
          id: "join-ministry",
          title: "3.1 Someone Wants to Join a Ministry",
          context: [
            "Use this when a parishioner or newcomer says they want to help with music, hospitality, readings, altar serving, media, children's ministry, or another parish ministry.",
          ],
          stepsTitle: "Quick process",
          steps: [
            "Search for the person in Address Book.",
            "Add a short note or tag about their ministry interest.",
            "Notify the correct ministry overseer or staff member.",
            "Once approved, add them to the correct ministry team or roster.",
          ],
          seeAlso: [
            ["1.2 Find an Existing Person", "#find-existing-person"],
            ["1.4 Add Notes and Tags", "#add-notes-tags"],
            ["2.2 Assign Ministry Overseers", "#assign-overseers"],
            ["2.4 Manage Ministry Teams", "#manage-teams"],
          ],
          staffNote:
            "Do not add someone to a serving roster until the correct ministry overseer has confirmed they should be included.",
        },
        {
          id: "newcomer-follow-up",
          title: "3.2 Newcomer Follow-Up",
          context: [
            "Use this when someone new visits CTK, fills out a form, contacts the office, or asks for more information about the parish.",
          ],
          stepsTitle: "Quick process",
          steps: [
            "Search for the person in Address Book.",
            "If they already exist, open their contact record.",
            "If they do not exist, review their form response or add them as a new contact.",
            "Add a short note explaining what follow-up is needed.",
            "Add a tag if used, such as Newcomer or Follow-Up Needed.",
            "Notify the correct staff member.",
          ],
          seeAlso: [
            ["1.1 Add a New Person Manually", "#add-new-person"],
            ["1.2 Find an Existing Person", "#find-existing-person"],
            ["1.3 Review Form Responses", "#review-form-responses"],
            ["1.4 Add Notes and Tags", "#add-notes-tags"],
          ],
          staffNote:
            "Keep follow-up notes short and clear. The goal is to help staff know what needs to happen next.",
        },
        {
          id: "cant-serve-date",
          title: "3.3 Cannot Serve on a Roster Date",
          context: [
            "Use this when someone tells staff they cannot serve on a roster date.",
          ],
          stepsTitle: "Quick process",
          steps: [
            "Open the person's roster.",
            "Find the date they are scheduled to serve.",
            "Remove them from that date.",
            "Add a replacement if needed.",
            "Check for warnings, such as clashes or unavailability.",
            "If the roster was already published, notify the people affected.",
          ],
          seeAlso: [["2.7 Edit a Roster Date", "#edit-roster-date"]],
          staffNote:
            "Avoid removing someone from all future dates unless that is the actual intention. In most cases, only remove them from the specific date they cannot serve.",
        },
        {
          id: "check-ministry-roster",
          title: "3.4 Check a Ministry Roster",
          context: [
            "Use this when a ministry leader or overseer needs to see who is scheduled to serve.",
          ],
          stepsTitle: "Quick process",
          steps: [
            "Open the correct ministry roster.",
            "Review the upcoming dates.",
            "Check who is scheduled to serve.",
            "Look for warnings, such as clashes or unavailability.",
            "If changes are needed, use the roster editing steps.",
          ],
          seeAlso: [
            ["2.5 Create a Roster", "#create-roster"],
            ["2.7 Edit a Roster Date", "#edit-roster-date"],
          ],
          staffNote:
            "Only make changes if you are responsible for that ministry or have been asked to update the roster.",
        },
        {
          id: "form-response-follow-up",
          title: "3.5 Form Response Follow-Up",
          context: [
            "Use this when someone submits a form and staff need to review it, connect it to a person, or decide what should happen next.",
          ],
          stepsTitle: "Quick process",
          steps: [
            "Open the submitted form response.",
            "Check whether it is already linked to a contact.",
            "If needed, link it to the correct contact or add a new contact.",
            "Review what the person submitted.",
            "Add a note or tag if follow-up is needed.",
            "Mark the response as handled once staff have dealt with it.",
          ],
          seeAlso: [
            ["1.2 Find an Existing Person", "#find-existing-person"],
            ["1.3 Review Form Responses", "#review-form-responses"],
            ["1.4 Add Notes and Tags", "#add-notes-tags"],
          ],
          staffNote:
            "Do not create a new contact until you have checked whether the person already exists in ChurchSuite.",
        },
        {
          id: "update-published-roster",
          title: "3.6 Update a Published Roster",
          context: [
            "Use this when a roster has already been published, but a change needs to be made.",
          ],
          stepsTitle: "Quick process",
          steps: [
            "Open the published roster that needs to be changed.",
            "Find the date, person, or role that needs updating.",
            "Make the needed change.",
            "Check for warnings, such as clashes or unavailability.",
            "Save the update.",
            "Notify the affected people if the change impacts who is serving.",
          ],
          seeAlso: [
            ["2.6 Publish a Roster", "#publish-roster"],
            ["2.7 Edit a Roster Date", "#edit-roster-date"],
          ],
          staffNote:
            "Be careful when editing a published roster. If people have already seen the schedule, make sure important changes are communicated clearly by sending the newly updated roster.",
        },
      ],
    },
  ],
  quickReference: [
    ["Address Book", "Where adult contact records are stored."],
    ["Tag", "A label used to group or identify people."],
    ["Note", "A short internal comment added to a person's record."],
    ["Ministry", "A serving area, such as Music, Hospitality, Readers, or Altar Servers."],
    ["Team", "A group of people within a ministry."],
    ["Role", "What a person does in a ministry, such as Singer, Reader, Greeter, or Team Lead."],
    ["Roster", "A serving schedule showing who is serving, what role they have, and when they are scheduled."],
    ["Overseer", "A trusted person who helps manage a ministry, team, or roster."],
  ],
  reminders: [
    "Search before adding a new contact.",
    "Do not merge contacts unless you are sure they are duplicates.",
    "Keep notes short, respectful, and factual.",
    "Check roster details before publishing.",
    "Notify people when a published roster changes.",
    "Ask the office/admin lead if unsure.",
  ],
  helpLinks: {
    note:
      "ChurchSuite's official help articles may use the word Rotas. In this ChurchSuite account, the area may appear as Rosters or Ministries.",
    links: [
      [
        "Address Book Overview",
        "https://support.churchsuite.com/article/534-getting-started-with-the-address-book",
      ],
      [
        "Adding Contacts",
        "https://support.churchsuite.com/article/29-adding-a-new-contact-to-your-address-book",
      ],
      ["Forms", "https://support.churchsuite.com/article/589-forms"],
      [
        "Managing Form Responses",
        "https://support.churchsuite.com/article/600-managing-form-responses",
      ],
      [
        "Merging Duplicate Contacts",
        "https://support.churchsuite.com/article/359-merging-duplicate-contacts",
      ],
      [
        "Rotas/Rosters Overview",
        "https://support.churchsuite.com/article/524-getting-started-with-the-rotas-module",
      ],
      [
        "Adding a Ministry",
        "https://support.churchsuite.com/article/666-how-to-add-a-ministry",
      ],
      [
        "Creating a Rota/Roster",
        "https://support.churchsuite.com/article/52-how-to-create-a-rota",
      ],
      [
        "Working With Rotas/Rosters",
        "https://support.churchsuite.com/article/323-working-with-rotas-in-churchsuite-once-theyre-created",
      ],
    ],
  },
};
