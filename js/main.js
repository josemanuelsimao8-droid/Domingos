(() => {
  const whatsappNumber = "351962230436";
  const navigation = [
    ["Início", "index.html"],
    ["Sobre", "sobre.html"],
    ["Serviços", "servicos.html"],
    ["Imóveis", "imoveis.html"],
    ["Método", "metodo.html"],
    ["Contacto", "contacto.html"]
  ];
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const currentNavPage = currentPage === "imovel.html" ? "imoveis.html" : currentPage;
  const navLinks = navigation.map(([label, href]) => {
    const current = href === currentNavPage ? ' aria-current="page"' : "";
    return `<a href="${href}"${current}>${label}</a>`;
  }).join("");

  const headerHost = document.querySelector("[data-site-header]");
  if (headerHost) {
    headerHost.innerHTML = `<header class="site-header" id="top">
      <a class="brand" href="index.html" aria-label="Domingos Cá, início"><span>DOMINGOS</span><strong>CÁ</strong><small>GESTÃO IMOBILIÁRIA</small></a>
      <nav class="desktop-nav" id="primary-navigation" aria-label="Navegação principal">${navLinks}</nav>
      <a class="header-cta" href="#" data-whatsapp="Olá Domingos, gostaria de falar consigo sobre uma decisão imobiliária.">Falar comigo</a>
      <button class="menu-toggle" type="button" aria-label="Abrir menu" aria-controls="primary-navigation" aria-expanded="false"><span></span><span></span></button>
    </header>`;
  }

  const footerHost = document.querySelector("[data-site-footer]");
  if (footerHost) {
    footerHost.innerHTML = `<footer class="site-footer">
      <div class="footer-main"><div><a class="brand" href="index.html"><span>DOMINGOS</span><strong>CÁ</strong><small>GESTÃO IMOBILIÁRIA</small></a><p>Gestão imobiliária em Lisboa.</p></div>
      <nav class="footer-nav" aria-label="Navegação de rodapé">${navigation.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}</nav>
      <div class="footer-contact"><a href="tel:+351962230436">+351 962 230 436</a><a href="#" data-whatsapp="Olá Domingos, gostaria de falar consigo.">WhatsApp ↗</a><a href="https://www.instagram.com/domingos.ca/" target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href="https://www.kwportugal.pt/pt/agente/Domingos-Ca/38819" target="_blank" rel="noopener noreferrer">KW Portugal ↗</a></div></div>
      <div class="footer-bottom"><span>© ${new Date().getFullYear()} Domingos Cá</span><span>Lisboa, Portugal</span></div>
    </footer>`;
  }

  window.openWhatsApp = function (message) {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message || "Olá Domingos, gostaria de falar consigo.")}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  document.addEventListener("click", (event) => {
    const whatsappLink = event.target.closest("[data-whatsapp]");
    if (whatsappLink) {
      event.preventDefault();
      window.openWhatsApp(whatsappLink.dataset.whatsapp);
    }

    const menuButton = event.target.closest(".menu-toggle");
    if (menuButton) {
      const nav = document.getElementById("primary-navigation");
      const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isExpanded));
      menuButton.setAttribute("aria-label", isExpanded ? "Abrir menu" : "Fechar menu");
      nav.classList.toggle("mobile-open", !isExpanded);
    }

    if (event.target.closest("#primary-navigation a")) {
      const menuButton = document.querySelector(".menu-toggle");
      const nav = document.getElementById("primary-navigation");
      if (menuButton && nav) {
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir menu");
        nav.classList.remove("mobile-open");
      }
    }

    const serviceButton = event.target.closest("[data-service]");
    if (serviceButton) {
      const serviceContent = {
        vender: ["Vender um imóvel", "O processo pode incluir análise do imóvel e do contexto de mercado, preparação do posicionamento, divulgação, coordenação de visitas e acompanhamento da negociação e das etapas seguintes."],
        comprar: ["Comprar um imóvel", "Começamos por definir critérios, prioridades e enquadramento. A pesquisa e a análise das opções são acompanhadas para que possa comparar alternativas e organizar os passos da aquisição."],
        investir: ["Investir em imobiliário", "Acompanhamento na identificação e análise de oportunidades, com atenção ao objetivo do investimento, ao imóvel e à informação disponível. Cada decisão deve ser avaliada de acordo com o contexto do cliente."],
        acompanhar: ["Acompanhamento imobiliário", "Um ponto de contacto ao longo do processo para organizar tarefas, esclarecer dúvidas, manter a comunicação e acompanhar as etapas acordadas até à conclusão."]
      };
      const [title, copy] = serviceContent[serviceButton.dataset.service] || [];
      const dialog = document.getElementById("service-dialog");
      if (dialog && title) {
        document.getElementById("service-dialog-title").textContent = title;
        document.getElementById("service-dialog-copy").textContent = copy;
        document.getElementById("service-dialog-kicker").textContent = `SERVIÇO · ${serviceButton.dataset.service.toUpperCase()}`;
        document.getElementById("service-dialog-cta").dataset.whatsapp = `Olá Domingos, gostaria de conversar sobre o serviço: ${title}.`;
        dialog.showModal();
      }
    }

    if (event.target.closest(".dialog-close")) document.getElementById("service-dialog")?.close();
    if (event.target.matches(".service-dialog")) {
      const bounds = event.target.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) event.target.close();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      const menuButton = document.querySelector(".menu-toggle");
      const nav = document.getElementById("primary-navigation");
      if (menuButton && nav) {
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir menu");
        nav.classList.remove("mobile-open");
      }
    }
  });

  document.querySelectorAll("[data-domingos-photo]").forEach((image) => {
    image.src = window.DOMINGOS_PHOTO || "assets/image.webp";
  });

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const status = document.getElementById("form-status");
      if (!contactForm.reportValidity()) {
        status.textContent = "Verifique os campos assinalados antes de continuar.";
        status.classList.add("form-error");
        return;
      }
      const fields = new FormData(contactForm);
      const message = `Olá Domingos, sou ${fields.get("name")}. O meu contacto é ${fields.get("phone")} e o meu email é ${fields.get("email")}. Motivo: ${fields.get("reason")}. Mensagem: ${fields.get("message")}`;
      status.textContent = "A mensagem está preparada no WhatsApp. Reveja os dados antes de enviar.";
      status.classList.remove("form-error");
      window.openWhatsApp(message);
    });
  }

  const revealItems = document.querySelectorAll(".reveal, .service-detail-card, .property-card");
  if ("IntersectionObserver" in window && revealItems.length) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }
})();
