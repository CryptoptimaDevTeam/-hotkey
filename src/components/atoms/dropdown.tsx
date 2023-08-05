import React, { useState, useEffect } from 'react';
import type { PropsWithChildren } from '../../popup/popup';

interface DropdownType {
  visibility: boolean;
}

const Dropdown = ({
  visibility,
  children,
}: PropsWithChildren<DropdownType>) => {
  const [visibilityAnimation, setVisibilityAnimation] =
    useState<boolean>(false);
  const [repeat, setRepeat] = useState<number | null>(null);

  useEffect(() => {
    if (visibility) {
      if (repeat !== null) {
        clearTimeout(repeat); // Change 'clearTimeout(repeat)' to 'clearTimeout(repeat!)'
      }
      setRepeat(null);
      setVisibilityAnimation(true);
    } else {
      setRepeat(
        setTimeout(() => {
          setVisibilityAnimation(false);
        }, 400) as unknown as number
      );
    }
  }, [visibility]);

  return (
    <article
      className={`components-dropdown ${
        visibility ? 'slide-fade-in-dropdown' : 'slide-fade-out-dropdown'
      }`}
    >
      {visibilityAnimation && children}
    </article>
  );
};

export default Dropdown;
