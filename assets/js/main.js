document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navMenu = document.querySelector("[data-nav-menu]");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // Highlight active navigation link for both clean URLs (Vercel) and .html paths
  const rawPath = window.location.pathname.replace(/\/+$/, "") || "/";
  const currentPage =
    rawPath === "/" || rawPath.endsWith("/index.html")
      ? "beranda"
      : rawPath.includes("profil")
        ? "profil"
        : rawPath.includes("kontak")
          ? "kontak"
          : "";

  document.querySelectorAll("[data-page]").forEach((link) => {
    if (link.getAttribute("data-page") === currentPage) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    }
  });

  // Copy Instagram username on Kontak page
  const copyBtn = document.querySelector("[data-copy-ig]");
  const feedbackEl = document.querySelector("[data-copy-feedback]");

  if (copyBtn && feedbackEl) {
    copyBtn.addEventListener("click", async () => {
      const handle = copyBtn.getAttribute("data-copy-ig") || "";
      try {
        await navigator.clipboard.writeText(handle);
        feedbackEl.textContent = `Nama pengguna Instagram ${handle} berhasil disalin ke papan klip.`;
      } catch {
        feedbackEl.textContent = `Silakan salin nama pengguna secara manual: ${handle}`;
      }
    });
  }
});
