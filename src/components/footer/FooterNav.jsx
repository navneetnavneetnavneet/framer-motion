import React from "react";

const FooterNav = () => {
  return (
    <div className="w-full px-10 py-10 absolute bottom-0 flex items-center justify-between">
      <div className="flex items-center gap-10 font-semibold text-white">
        <div className="flex flex-col gap-3">
          <h2 className="text-xs opacity-50">VERSION</h2>
          <h3>2022 @ Edition</h3>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-xs opacity-50">LOCAL TIME</h2>
          <h3>07:27 AM GMT+2</h3>
        </div>
      </div>
      <div className="flex items-end gap-10 font-semibold text-white">
        <div className="flex flex-col gap-3">
          <h2 className="text-xs opacity-50">SOCIAL</h2>
          <h3>Awwwards</h3>
        </div>
        <h3>Instagram</h3>
        <h3>Twitter</h3>
        <h3>LinkedIn</h3>
      </div>
    </div>
  );
};

export default FooterNav;
