const h = rect => rect.bottom - rect.top + 'px';
const w = rect => rect.right - rect.left + 'px';

export default () => {
  let container, el, floating;

  const release = (elRect, containerRect) => {
    if (floating) {
      return;
    }

    floating = true;

    container.style.paddingTop = h(elRect);
    el.style.removeProperty('bottom');
    el.style.position = 'fixed';
    el.style.top = '0px';
    el.style.left = containerRect.left + 'px';
    el.style.width = w(containerRect);
  };

  const stick = (elRect, containerRect, bottom) => {
    if (!floating) {
      return;
    }

    floating = false;

    if (bottom) {
      el.style.removeProperty('top');
      el.style.position = 'absolute';
      el.style.bottom = '0px';
      el.style.left = '0px';
    } else {
      container.style.removeProperty('padding-top');
      el.style.removeProperty('position');
      el.style.removeProperty('top');
      el.style.removeProperty('bottom');
      el.style.removeProperty('left');
      el.style.removeProperty('width');
    }
  };

  const onScroll = () => {
    const containerRect = container.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const height = elRect.bottom - elRect.top;

    if (containerRect.bottom - height < 0) {
      stick(elRect, containerRect, true);
    } else if (containerRect.top < 0) {
      release(elRect, containerRect);
    } else {
      stick(elRect, containerRect);
    }
  };

  const init = () => {
    if (container && el) {
      onScroll();
      window.addEventListener('scroll', onScroll);
    } else {
      window.removeEventListener('scroll', onScroll);
    }
  };

  return {
    container: element => {
      container = element;
      init();
    },
    target: element => {
      el = element;
      init();
    },
  };
};
