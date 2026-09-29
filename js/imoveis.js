(() => {
  const properties = window.properties || [];
  const euro = new Intl.NumberFormat("pt-PT", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
  const dimensions = (property) => `${property.bedrooms} ${property.bedrooms === 1 ? "quarto" : "quartos"} · ${property.bathrooms} ${property.bathrooms === 1 ? "casa de banho" : "casas de banho"} · ${property.area} m²`;
  const propertyUrl = (property) => `imovel.html?id=${encodeURIComponent(property.id)}`;

  function renderCard(property, compact = false) {
    return `<article class="property-card catalog-card${compact ? " featured-card" : ""}">
      <a class="property-image-link" href="${propertyUrl(property)}" aria-label="Ver imóvel: ${property.title}"><img src="${property.image}" alt="${property.type} demonstrativo em ${property.location}" loading="lazy"></a>
      <div class="property-info"><span>${property.status.toUpperCase()} · ${property.location.toUpperCase()}</span><h2><a href="${propertyUrl(property)}">${property.title}</a></h2><p>${dimensions(property)}</p><div class="card-price"><strong>${euro.format(property.price)}${property.status === "Arrendamento" ? " / mês" : ""}</strong><a class="property-button" href="${propertyUrl(property)}">Ver imóvel <span>↗</span></a></div></div>
    </article>`;
  }

  const featured = document.getElementById("featured-properties");
  if (featured) featured.innerHTML = properties.slice(0, 2).map((property) => renderCard(property, true)).join("");

  const grid = document.getElementById("property-grid");
  const filterForm = document.getElementById("property-filters");
  const count = document.getElementById("property-count");
  if (grid && filterForm) {
    function filterProperties() {
      const formData = new FormData(filterForm);
      const query = String(formData.get("q") || "").trim().toLocaleLowerCase("pt-PT");
      const status = formData.get("status");
      const type = formData.get("type");
      const location = formData.get("location");
      const priceRange = formData.get("price");
      const results = properties.filter((property) => {
        const searchable = `${property.title} ${property.location} ${property.type} ${property.status}`.toLocaleLowerCase("pt-PT");
        const priceMatches = !priceRange || (priceRange === "under250" && property.price <= 250000) || (priceRange === "250to500" && property.price > 250000 && property.price <= 500000) || (priceRange === "over500" && property.price > 500000);
        return (!query || searchable.includes(query)) && (!status || property.status === status) && (!type || property.type === type) && (!location || property.city === location) && priceMatches;
      });
      count.textContent = `${results.length} ${results.length === 1 ? "imóvel encontrado" : "imóveis encontrados"}`;
      grid.innerHTML = results.length ? results.map((property) => renderCard(property)).join("") : '<p class="empty-state">Não foram encontrados imóveis com estes critérios. Ajuste os filtros ou fale diretamente com Domingos.</p>';
      grid.querySelectorAll(".property-card").forEach((card) => card.classList.add("is-visible"));
    }
    filterForm.addEventListener("input", filterProperties);
    filterForm.addEventListener("change", filterProperties);
    filterForm.addEventListener("reset", () => window.setTimeout(filterProperties, 0));
    filterProperties();
  }

  const detail = document.getElementById("property-detail");
  if (detail) {
    const propertyId = new URLSearchParams(window.location.search).get("id");
    const property = properties.find((item) => String(item.id) === propertyId);
    if (!property) {
      document.title = "Imóvel não encontrado | Domingos Cá";
      detail.innerHTML = '<p class="eyebrow">CATÁLOGO IMOBILIÁRIO</p><h1>Este imóvel não está disponível.</h1><p class="page-lead">O endereço pode estar incorreto ou o anúncio já não estar ativo.</p><a class="btn btn-dark" href="imoveis.html">Voltar aos imóveis <span>↗</span></a>';
    } else {
      document.title = `${property.title} | Domingos Cá`;
      const images = property.images?.length ? property.images : [property.image];
      detail.innerHTML = `<a class="back-link" href="imoveis.html">← Voltar aos imóveis</a>
        <div class="detail-gallery"><img class="detail-main-image" src="${images[0]}" alt="${property.type} demonstrativo: ${property.title}" id="detail-main-image"><div class="detail-thumbnails">${images.map((image, index) => `<button type="button" data-image="${image}" aria-label="Ver imagem ${index + 1}"><img src="${image}" alt=""></button>`).join("")}</div></div>
        <section class="detail-copy"><p class="eyebrow">${property.status.toUpperCase()} · ${property.location.toUpperCase()}</p><h1>${property.title}</h1><p class="detail-price">${euro.format(property.price)}${property.status === "Arrendamento" ? " / mês" : ""}</p><dl class="property-specs"><div><dt>Tipologia</dt><dd>${property.bedrooms} quartos</dd></div><div><dt>Casas de banho</dt><dd>${property.bathrooms}</dd></div><div><dt>Área</dt><dd>${property.area} m²</dd></div><div><dt>Tipo</dt><dd>${property.type}</dd></div><div><dt>Estado</dt><dd>${property.status}</dd></div><div><dt>Localização</dt><dd>${property.location}</dd></div></dl><h2>Sobre este imóvel</h2><p>${property.description}</p><p class="demo-disclaimer">Anúncio demonstrativo. As características, o preço e a disponibilidade apresentados não são uma oferta comercial e devem ser confirmados.</p><a class="btn btn-dark interest-button" href="#" data-whatsapp="Olá Domingos, tenho interesse no imóvel ${property.title}. Gostaria de obter mais informações.">Tenho interesse neste imóvel ↗</a></section>`;
      detail.querySelectorAll(".detail-thumbnails button").forEach((button) => button.addEventListener("click", () => {
        const image = detail.querySelector(".detail-main-image");
        image.src = button.dataset.image;
        detail.querySelectorAll(".detail-thumbnails button").forEach((thumbnail) => thumbnail.classList.toggle("selected", thumbnail === button));
      }));
      detail.querySelector(".detail-thumbnails button")?.classList.add("selected");
    }
  }
})();
