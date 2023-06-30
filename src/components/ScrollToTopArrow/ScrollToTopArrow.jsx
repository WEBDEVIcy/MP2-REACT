import React, { useState, useEffect } from 'react';

import './style.css';

function ScrollToTopArrow() {
  const [showArrow, setShowArrow] = useState(false);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;
      setShowArrow(scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.push(location.pathname);
  };

  return showArrow ? (
    <div className="scroll-to-top-arrow" onClick={handleClick}>
      <span>&#8593;</span>
    </div>
  ) : null;
}

export default ScrollToTopArrow;
