(() => {
  const menuButton = document.querySelector('.demo-menu-toggle');
  const mobileMenu = document.querySelector('#mobileMenu');
  const searchDialog = document.querySelector('#searchDialog');
  const cartDialog = document.querySelector('#cartDialog');
  const cartCount = document.querySelector('.demo-cart-count');
  const dialogCartCount = document.querySelector('#dialogCartCount');
  const cartMessage = document.querySelector('#cartMessage');
  let itemCount = 0;
  let lastAdded = '';

  const closeDialog = (dialog) => {
    if (dialog?.open) dialog.close();
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
      if (searchDialog?.showModal) {
        searchDialog.showModal();
        window.setTimeout(() => document.querySelector('#searchInput')?.focus(), 30);
      }
    });
  });

  document.querySelectorAll('[data-open-cart]').forEach((button) => {
    button.addEventListener('click', () => {
      dialogCartCount.textContent = `(${itemCount})`;
      cartMessage.textContent = itemCount
        ? `${lastAdded} is in your bag. This sample bag is for preview only.`
        : 'Your bag is waiting for something special.';
      cartDialog?.showModal?.();
    });
  });

  document.querySelectorAll('[data-close-dialog]').forEach((button) => {
    button.addEventListener('click', () => {
      closeDialog(button.closest('dialog'));
    });
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
      cartCount.textContent = String(itemCount);
      document.querySelectorAll('[data-open-cart]').forEach((cartButton) => {
        cartButton.setAttribute('aria-label', `Open shopping bag, ${itemCount} ${itemCount === 1 ? 'item' : 'items'}`);
      });
      button.innerHTML = 'Added to bag <span aria-hidden="true">✓</span>';
      window.setTimeout(() => {
        button.innerHTML = 'Add to bag <span aria-hidden="true">+</span>';
      }, 1500);
      dialogCartCount.textContent = `(${itemCount})`;
      cartMessage.textContent = `${lastAdded} is in your bag. This sample bag is for preview only.`;
    });
  });

  document.querySelector('#newsletterForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('#newsletterEmail');
    const status = document.querySelector('#newsletterStatus');
    if (input?.checkValidity()) {
      status.textContent = 'Thank you — this demo form is not connected to a mailing list yet.';
      input.value = '';
    } else {
      input?.reportValidity();
    }
  });
})();
