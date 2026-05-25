import { assetPath, guide, screenshots } from "./content.js";

const root = document.querySelector("#app");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderParagraphs(paragraphs = []) {
  return paragraphs.map((text) => `<p>${escapeHtml(text)}</p>`).join("");
}

function renderPlainList(items = [], className = "plain-list") {
  return `<ul class="${className}">${items
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("")}</ul>`;
}

function renderFigure(item) {
  const key = typeof item === "string" ? item : item.key;
  const image = screenshots[key];

  if (!image) {
    return "";
  }

  const caption = typeof item === "string" ? "" : item.caption;
  const ratio = `${image.width} / ${image.height}`;

  return `
    <figure class="screenshot" style="--shot-ratio: ${ratio}">
      <button
        class="screenshot-trigger"
        type="button"
        data-lightbox-src="${image.src}"
        data-lightbox-alt="${escapeHtml(image.alt)}"
        data-lightbox-caption="${escapeHtml(caption || image.alt)}"
        aria-label="Open screenshot viewer"
      >
        <img
          src="${image.src}"
          alt="${escapeHtml(image.alt)}"
          width="${image.width}"
          height="${image.height}"
          loading="lazy"
          decoding="async"
        />
      </button>
      ${caption ? `<figcaption>${escapeHtml(caption)}</figcaption>` : ""}
    </figure>
  `;
}

function renderStep(step) {
  const item = typeof step === "string" ? { text: step } : step;
  const images = item.images?.length
    ? `<div class="screenshot-grid">${item.images.map(renderFigure).join("")}</div>`
    : "";

  return `<li><span>${escapeHtml(item.text)}</span>${images}</li>`;
}

function renderSteps(task) {
  if (!task.steps?.length) {
    return "";
  }

  const tag = task.ordered === false ? "ul" : "ol";
  const className = task.ordered === false ? "steps steps-unordered" : "steps";

  return `
    <div class="task-steps">
      <h4>${escapeHtml(task.stepsTitle || "Steps")}</h4>
      <${tag} class="${className}">
        ${task.steps.map(renderStep).join("")}
      </${tag}>
    </div>
  `;
}

function renderCallouts(callouts = []) {
  return callouts
    .map(
      (callout) => `
        <aside class="callout">
          <strong>${escapeHtml(callout.title)}</strong>
          <p>${escapeHtml(callout.body)}</p>
        </aside>
      `,
    )
    .join("");
}

function renderDefinitions(definitions = []) {
  if (!definitions.length) {
    return "";
  }

  return `
    <dl class="definition-grid">
      ${definitions
        .map(
          (item) => `
            <div>
              <dt>${escapeHtml(item.term)}</dt>
              <dd>${escapeHtml(item.definition)}</dd>
            </div>
          `,
        )
        .join("")}
    </dl>
  `;
}

function renderFieldNotes(notes = []) {
  if (!notes.length) {
    return "";
  }

  return `
    <aside class="field-notes">
      <h4>Field notes</h4>
      ${renderPlainList(notes)}
    </aside>
  `;
}

function renderStaffNote(note) {
  if (!note) {
    return "";
  }

  return `
    <aside class="staff-note">
      <span>Staff note</span>
      <p>${escapeHtml(note)}</p>
    </aside>
  `;
}

function renderSeeAlso(links = []) {
  if (!links.length) {
    return "";
  }

  return `
    <div class="see-also">
      <h4>See also</h4>
      <div>
        ${links
          .map(
            ([label, href]) =>
              `<a href="${href}">${escapeHtml(label)}</a>`,
          )
          .join("")}
      </div>
    </div>
  `;
}

function taskPageLabel(task) {
  return task.title.match(/^(\d+\.\d+)/)?.[1] || "Page";
}

function renderTask(task) {
  const pageLabel = taskPageLabel(task);

  return `
    <article class="task" id="${task.id}" data-anchor-section>
      <div class="task-heading">
        <h3>${escapeHtml(task.title)}</h3>
        <a class="task-page" href="#${task.id}" aria-label="Link to ${escapeHtml(task.title)}">Page ${escapeHtml(pageLabel)}</a>
      </div>
      <div class="task-body">
        ${renderParagraphs(task.context)}
        ${renderCallouts(task.callouts)}
        ${renderDefinitions(task.definitions)}
        ${renderSteps(task)}
        ${renderFieldNotes(task.fieldNotes)}
        ${renderSeeAlso(task.seeAlso)}
        ${renderStaffNote(task.staffNote)}
      </div>
    </article>
  `;
}

function renderSection(section) {
  return `
    <section class="guide-section" id="${section.id}" data-anchor-section>
      <div class="section-heading">
        <span>${escapeHtml(section.kicker)}</span>
        <h2>${escapeHtml(section.title)}</h2>
        <p>${escapeHtml(section.description)}</p>
        ${section.body ? `<p>${escapeHtml(section.body)}</p>` : ""}
      </div>
      <div class="task-list">
        ${section.tasks.map(renderTask).join("")}
      </div>
    </section>
  `;
}

function renderSidebar() {
  return `
    <aside class="sidebar" aria-label="Guide navigation">
      <nav>
        <a href="#guide" data-nav-link="guide">Start</a>
        ${guide.sections
          .map(
            (section) => `
              <div class="nav-group">
                <a href="#${section.id}" data-nav-link="${section.id}">${escapeHtml(section.title)}</a>
                ${section.tasks
                  .map(
                    (task) =>
                      `<a href="#${task.id}" data-nav-link="${task.id}">${escapeHtml(task.title)}</a>`,
                  )
                  .join("")}
              </div>
            `,
          )
          .join("")}
        <a href="#quick-reference" data-nav-link="quick-reference">Quick Reference</a>
        <a href="#official-help" data-nav-link="official-help">Official Help</a>
        <a href="#feedback" data-nav-link="feedback">Feedback</a>
      </nav>
    </aside>
  `;
}

function renderMobilePills() {
  return `
    <nav class="mobile-pills" aria-label="Section shortcuts">
      ${guide.sections
        .map(
          (section) => `<a href="#${section.id}">${escapeHtml(section.title)}</a>`,
        )
        .join("")}
      <a href="#quick-reference">Quick Reference</a>
      <a href="#official-help">Official Help</a>
      <a href="#feedback">Feedback</a>
    </nav>
  `;
}

function renderPreface() {
  return `
    <section class="preface-card shell" aria-labelledby="preface-title">
      <div class="preface-card__label">Preface</div>
      <div class="preface-card__body">
        <h2 id="preface-title">${escapeHtml(guide.preface.title)}</h2>
        ${renderParagraphs(guide.preface.paragraphs)}
      </div>
      <a class="preface-card__link" href="#official-help">Official help links</a>
    </section>
  `;
}

function renderIntro() {
  const intro = guide.intro;

  return `
    <section class="intro shell" id="guide" data-anchor-section>
      <div class="intro-copy">
        <span class="eyebrow">How to use this guide</span>
        <h2>Start with the task you need to finish.</h2>
        ${renderParagraphs(intro.paragraphs)}
      </div>
      <div class="intro-panels">
        <section>
          <h3>Look for</h3>
          ${renderPlainList(intro.lookFor)}
        </section>
        <section>
          <h3>Who this is for</h3>
          <p>${escapeHtml(intro.audience)}</p>
        </section>
        <section>
          <h3>Use this guide</h3>
          ${renderPlainList(intro.useThisGuide)}
        </section>
        <section>
          <h3>Use official docs</h3>
          ${renderPlainList(intro.officialDocs)}
        </section>
      </div>
      ${renderMobilePills()}
    </section>
  `;
}

function renderQuickReference() {
  return `
    <section class="reference shell" id="quick-reference" data-anchor-section>
      <div class="section-heading compact">
        <span>Reference</span>
        <h2>Quick Reference</h2>
      </div>
      <dl class="term-grid">
        ${guide.quickReference
          .map(
            ([term, definition]) => `
              <div>
                <dt>${escapeHtml(term)}</dt>
                <dd>${escapeHtml(definition)}</dd>
              </div>
            `,
          )
          .join("")}
      </dl>
    </section>
  `;
}

function renderReminders() {
  return `
    <section class="reminders">
      <div class="shell reminder-grid">
        <div>
          <span class="eyebrow">Staff reminders</span>
          <h2>Keep the system clean and useful.</h2>
        </div>
        ${renderPlainList(guide.reminders, "reminder-list")}
      </div>
    </section>
  `;
}

function renderHelpLinks() {
  return `
    <section class="official-help shell" id="official-help" data-anchor-section>
      <div class="section-heading compact">
        <span>External docs</span>
        <h2>Official ChurchSuite Help Links</h2>
        <p>${escapeHtml(guide.helpLinks.note)}</p>
      </div>
      <div class="help-grid">
        ${guide.helpLinks.links
          .map(
            ([label, href]) => `
              <a href="${href}" target="_blank" rel="noreferrer">
                <span>${escapeHtml(label)}</span>
                <small>${new URL(href).hostname}</small>
              </a>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderFeedback() {
  return `
    <section class="feedback shell" id="feedback" data-anchor-section>
      <div class="section-heading compact">
        <span>Feedback</span>
        <h2>Suggest an update or report a bug.</h2>
        <p>If something is unclear, missing, outdated, or not working on this site, send a quick note so the guide can stay useful.</p>
        <p class="feedback-note">This sends to the CTK feedback inbox. Please keep messages plain text.</p>
      </div>
      <form
        class="feedback-form"
        action="https://formsubmit.co/nikkayo17@hotmail.com"
        method="POST"
      >
        <input type="hidden" name="_subject" value="CTK ChurchSuite guide feedback" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="page-url" value="" />
        <div class="form-row">
          <label>
            <span>Feedback type</span>
            <select name="kind" required>
              <option value="">Choose one</option>
              <option value="Suggestion">Suggestion</option>
              <option value="Bug report">Bug report</option>
              <option value="Missing section">Missing section</option>
              <option value="Screenshot issue">Screenshot issue</option>
              <option value="Correction">Correction</option>
            </select>
          </label>
          <label>
            <span>Page or section</span>
            <input
              name="page"
              type="text"
              maxlength="120"
              placeholder="Example: 1.4 Add Notes and Tags"
            />
          </label>
        </div>
        <label>
          <span>Message</span>
          <textarea
            name="message"
            rows="5"
            minlength="8"
            maxlength="2000"
            required
            placeholder="What should be added, changed, or fixed?"
          ></textarea>
        </label>
        <div class="form-row">
          <label>
            <span>Name</span>
            <input name="name" type="text" maxlength="80" autocomplete="name" placeholder="Optional" />
          </label>
          <label>
            <span>Email</span>
            <input name="email" type="email" maxlength="254" autocomplete="email" placeholder="Optional" />
          </label>
        </div>
        <div class="feedback-actions">
          <button class="button primary" type="submit">Send feedback</button>
          <p class="feedback-status" role="status" aria-live="polite"></p>
        </div>
      </form>
    </section>
  `;
}

function renderHero() {
  return `
    <section class="hero" id="top">
      <div class="hero-inner shell">
        <div class="hero-copy">
          <span class="eyebrow">${escapeHtml(guide.version)} staff reference</span>
          <h1>${escapeHtml(guide.title)}</h1>
          <p>${escapeHtml(guide.subtitle)}</p>
          <div class="hero-actions">
            <a class="button primary" href="${guide.downloadHref}" download>Download the PDF version</a>
          </div>
          <dl class="hero-stats" aria-label="Guide summary">
            ${guide.stats
              .map(
                (item) => `
                  <div>
                    <dt>${escapeHtml(item.value)}</dt>
                    <dd>${escapeHtml(item.label)}</dd>
                  </div>
                `,
              )
              .join("")}
          </dl>
        </div>
      </div>
    </section>
  `;
}

function renderHeader() {
  return `
    <header class="site-header">
      <nav class="top-nav shell" aria-label="Primary navigation">
        <a class="brand" href="#top">
          <span class="brand-logo">
            <img src="${guide.logoHref}" alt="Christ the King Parish logo" />
          </span>
          <span>CTK Dartmouth</span>
        </a>
        <div class="top-links">
          <a href="#address-book">Address Book</a>
          <a href="#ministries-rosters">Rosters</a>
          <a href="#staff-situations">Situations</a>
          <a href="#feedback">Feedback</a>
          <a class="download-link" href="${guide.downloadHref}" download>Download PDF</a>
        </div>
      </nav>
    </header>
  `;
}

function renderApp() {
  document.documentElement.style.setProperty("--hero-image", `url("${guide.heroImage}")`);

  root.innerHTML = `
    <a class="skip-link" href="#guide">Skip to guide</a>
    ${renderHeader()}
    <main>
      ${renderHero()}
      ${renderPreface()}
      ${renderIntro()}
      <div class="docs-shell shell">
        ${renderSidebar()}
        <div class="docs-content">
          ${guide.sections.map(renderSection).join("")}
        </div>
      </div>
      ${renderQuickReference()}
      ${renderReminders()}
      ${renderHelpLinks()}
      ${renderFeedback()}
    </main>
    <footer class="site-footer">
      <div class="shell">
        <span>Christ the King Parish Dartmouth</span>
        <a href="${guide.downloadHref}" download>Download the PDF version</a>
      </div>
    </footer>
    <button class="back-to-top" type="button" aria-label="Back to top">
      <span aria-hidden="true">^</span>
      <span>Top</span>
    </button>
    <div class="image-viewer" role="dialog" aria-modal="true" aria-label="Screenshot viewer" hidden>
      <button class="image-viewer__backdrop" type="button" aria-label="Close screenshot viewer"></button>
      <figure class="image-viewer__panel">
        <div class="image-viewer__toolbar">
          <span>Screenshot preview</span>
          <button class="image-viewer__close" type="button">Close</button>
        </div>
        <img src="" alt="" />
        <figcaption></figcaption>
      </figure>
    </div>
  `;
}

function setupImageViewer() {
  const viewer = document.querySelector(".image-viewer");
  const viewerImage = viewer.querySelector("img");
  const viewerCaption = viewer.querySelector("figcaption");
  const closeButton = viewer.querySelector(".image-viewer__close");
  const backdrop = viewer.querySelector(".image-viewer__backdrop");
  let previousFocus = null;

  const closeViewer = () => {
    viewer.hidden = true;
    document.body.classList.remove("viewer-open");
    viewerImage.removeAttribute("src");
    viewerImage.alt = "";
    viewerCaption.textContent = "";
    previousFocus?.focus();
  };

  const openViewer = (trigger) => {
    previousFocus = document.activeElement;
    viewerImage.src = trigger.dataset.lightboxSrc;
    viewerImage.alt = trigger.dataset.lightboxAlt;
    viewerCaption.textContent = trigger.dataset.lightboxCaption;
    viewer.hidden = false;
    document.body.classList.add("viewer-open");
    closeButton.focus();
  };

  document.querySelectorAll(".screenshot-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => openViewer(trigger));
  });

  closeButton.addEventListener("click", closeViewer);
  backdrop.addEventListener("click", closeViewer);

  document.addEventListener("keydown", (event) => {
    if (!viewer.hidden && event.key === "Escape") {
      closeViewer();
    }
  });
}

function setupActiveNavigation() {
  const links = new Map(
    [...document.querySelectorAll("[data-nav-link]")].map((link) => [
      link.dataset.navLink,
      link,
    ]),
  );

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) {
        return;
      }

      links.forEach((link) => link.removeAttribute("aria-current"));
      links.get(visible.target.id)?.setAttribute("aria-current", "true");
    },
    {
      rootMargin: "-20% 0px -70% 0px",
      threshold: [0.05, 0.25, 0.5],
    },
  );

  document
    .querySelectorAll("[data-anchor-section]")
    .forEach((section) => observer.observe(section));
}

function setupBackToTop() {
  const button = document.querySelector(".back-to-top");

  const updateVisibility = () => {
    button.classList.toggle("is-visible", window.scrollY > 520);
  };

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", updateVisibility, { passive: true });
  updateVisibility();
}

function setupFeedbackForm() {
  const form = document.querySelector(".feedback-form");

  if (!form) {
    return;
  }

  const status = form.querySelector(".feedback-status");
  const submitButton = form.querySelector('button[type="submit"]');
  const pageUrlInput = form.querySelector('input[name="page-url"]');
  const fieldLimits = {
    page: 120,
    name: 80,
    email: 254,
    message: 2000,
  };
  const plainTextPattern = /<\/?[a-z][\s\S]*?>|javascript:|data:text\/html|on\w+\s*=/i;

  const normalizeSingleLine = (value) => value.replace(/\s+/g, " ").trim();
  const normalizeMessage = (value) => value.replace(/\r\n/g, "\n").trim();

  const rejectIfInvalid = (fieldName, value) => {
    if (value.length > fieldLimits[fieldName]) {
      return `Please keep ${fieldName} under ${fieldLimits[fieldName]} characters.`;
    }

    if (plainTextPattern.test(value)) {
      return "Please use plain text only and remove any HTML or script-like content.";
    }

    return "";
  };

  const sanitizeForm = () => {
    const kind = form.querySelector('select[name="kind"]');
    const page = form.querySelector('input[name="page"]');
    const message = form.querySelector('textarea[name="message"]');
    const name = form.querySelector('input[name="name"]');
    const email = form.querySelector('input[name="email"]');

    page.value = normalizeSingleLine(page.value);
    name.value = normalizeSingleLine(name.value);
    email.value = normalizeSingleLine(email.value);
    message.value = normalizeMessage(message.value);

    const fieldErrors = [
      rejectIfInvalid("page", page.value),
      rejectIfInvalid("name", name.value),
      rejectIfInvalid("email", email.value),
      rejectIfInvalid("message", message.value),
    ].filter(Boolean);

    if (!kind.value) {
      fieldErrors.unshift("Please choose a feedback type.");
    }

    if (message.value.length < 8) {
      fieldErrors.unshift("Please enter at least 8 characters in the message.");
    }

    return fieldErrors[0] || "";
  };

  pageUrlInput.value = window.location.href;

  form.addEventListener("submit", async (event) => {
    const validationMessage = sanitizeForm();

    if (validationMessage) {
      event.preventDefault();
      status.textContent = validationMessage;
      return;
    }

    pageUrlInput.value = window.location.href;
    status.textContent = "Sending...";
    submitButton.disabled = true;
  });
}

function scrollToInitialHash() {
  if (!window.location.hash) {
    return;
  }

  const scrollToTarget = () => {
    const targetId = decodeURIComponent(window.location.hash.slice(1));
    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView({ block: "start" });
    }
  };

  requestAnimationFrame(scrollToTarget);
  window.addEventListener("load", scrollToTarget, { once: true });
  [120, 450].forEach((delay) => window.setTimeout(scrollToTarget, delay));
}

renderApp();
setupImageViewer();
setupActiveNavigation();
setupBackToTop();
setupFeedbackForm();
scrollToInitialHash();
window.addEventListener("hashchange", scrollToInitialHash);
