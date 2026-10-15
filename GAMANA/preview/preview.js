(() => {
  const menuButton = document.querySelector('.demo-menu-toggle');
  const mobileMenu = document.querySelector('#mobileMenu');
  const searchDialog = document.querySelector('#searchDialog');
  const cartDialog = document.querySelector('#cartDialog');
  const cartCount = document.querySelector('.demo-cart-count');
  const dialogCartCount = document.querySelector('#dialogCartCount');
  const cartMessage = document.querySelector('#cartMessage');
  const searchForm = document.querySelector('#searchForm');
  const searchInput = document.querySelector('#searchInput');
  const productCards = [...document.querySelectorAll('.demo-product-card')];
  const searchEmpty = document.querySelector('#searchEmpty');
  let itemCount = 0;
  let lastAdded = '';

  const closeDialog = (dialog) => {
    if (dialog?.open) dialog.close();
  };

  const setCartMessage = () => {
    if (dialogCartCount) dialogCartCount.textContent = `(${itemCount})`;
    if (cartMessage) {
      cartMessage.textContent = itemCount
        ? `${lastAdded} ${itemCount === 1 ? 'is' : 'and other good things are'} in your sample bag.`
        : 'Your bag is waiting for something special.';
    }
  };

  menuButton?.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
    mobileMenu?.classList.toggle('is-open', !isOpen);
    if (mobileMenu) mobileMenu.hidden = isOpen;
  });

  mobileMenu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      mobileMenu.hidden = true;
      menuButton?.setAttribute('aria-expanded', 'false');
      menuButton?.setAttribute('aria-label', 'Open menu');
    });
  });

  document.querySelectorAll('[data-open-search]').forEach((button) => {
    button.addEventListener('click', () => {
      if (!searchDialog?.showModal) return;
      searchDialog.showModal();
      window.setTimeout(() => searchInput?.focus(), 30);
    });
  });

  document.querySelectorAll('[data-open-cart]').forEach((button) => {
    button.addEventListener('click', () => {
      setCartMessage();
      cartDialog?.showModal?.();
    });
  });

  document.querySelectorAll('[data-close-dialog]').forEach((button) => {
    button.addEventListener('click', () => closeDialog(button.closest('dialog')));
  });

  document.querySelectorAll('dialog').forEach((dialog) => {
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) closeDialog(dialog);
    });
  });

  document.querySelectorAll('[data-add-item]').forEach((button) => {
    button.addEventListener('click', () => {
      lastAdded = button.dataset.addItem || 'An item';
      itemCount += 1;
      if (cartCount) cartCount.textContent = String(itemCount);
      document.querySelectorAll('[data-open-cart]').forEach((cartButton) => {
        cartButton.setAttribute('aria-label', `Open shopping bag, ${itemCount} ${itemCount === 1 ? 'item' : 'items'}`);
      });
      setCartMessage();
      button.innerHTML = 'Added to bag <span aria-hidden="true">✓</span>';
      window.setTimeout(() => {
        button.innerHTML = 'Add to bag <span aria-hidden="true">+</span>';
      }, 1400);
    });
  });

  searchForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = (searchInput?.value || '').trim().toLocaleLowerCase();
    let visibleCount = 0;

    productCards.forEach((card) => {
      const text = `${card.dataset.productName || ''} ${card.textContent || ''}`.toLocaleLowerCase();
      const matches = !query || text.includes(query);
      card.hidden = !matches;
      if (matches) visibleCount += 1;
    });

    if (searchEmpty) searchEmpty.hidden = visibleCount !== 0;
    closeDialog(searchDialog);
    document.querySelector('#new')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  searchInput?.addEventListener('input', () => {
    if (searchEmpty) searchEmpty.hidden = true;
  });

  document.querySelector('#newsletterForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('#newsletterEmail');
    const status = document.querySelector('#newsletterStatus');
    if (input?.checkValidity()) {
      if (status) status.textContent = 'Thank you — this preview form is not connected to a mailing list.';
      input.value = '';
    } else {
      input?.reportValidity();
    }
  });
})();
