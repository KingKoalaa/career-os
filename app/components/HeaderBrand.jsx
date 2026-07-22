/**
 * HeaderBrand
 *
 * Presentational left-aligned section of the application header.
 * Displays the static "Career OS" wordmark. No logo, no routing, no
 * interaction — see TASK-M1-003 out-of-scope list.
 */
function HeaderBrand() {
  return (
    <div className="flex flex-1 items-center justify-start">
      <span className="text-base font-semibold text-slate-900">
        Career OS
      </span>
    </div>
  );
}

export default HeaderBrand;