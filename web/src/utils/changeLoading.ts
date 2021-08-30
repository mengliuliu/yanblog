import { LoadingObserver } from "contexts/globalLoading";

const openLoading = (): void => {
  LoadingObserver.emit("openLoading", true);
};

const closeLoading = (): void => {
  LoadingObserver.emit("closeLoading", false);
};

export { openLoading, closeLoading };
