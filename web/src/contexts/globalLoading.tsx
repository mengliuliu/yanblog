/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import { useState, createContext } from "react";

declare interface GlobalLoadingType {
  loading: boolean;
  setLoading?: React.Dispatch<boolean>;
}

declare interface GlobalLoadingProviderType {
  value?: GlobalLoadingType;
}

export const GlobalLoadingContext = createContext<GlobalLoadingType>({
  loading: false,
});

GlobalLoadingContext.displayName = "GlobalLoadingContext";

interface LoadingObserverListType {
  [key: string]: (React.Dispatch<boolean> | (() => void))[];
}

interface LoadingObserverType {
  list: LoadingObserverListType;
  on: (key: string, fn: React.Dispatch<boolean>) => void;
  emit: (key: string, data: boolean) => void;
}

export const LoadingObserver: LoadingObserverType = {
  list: {},
  on(key, fn) {
    if (!this.list[key]) {
      this.list[key] = [];
    }
    this.list[key].push(fn);
  },
  emit(key, data) {
    (this.list[key] || []).forEach((item: React.Dispatch<boolean>) => {
      item(data);
    });
  },
};

export const GlobalLoadingProvider: React.FC<GlobalLoadingProviderType> = ({
  value,
  children,
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  LoadingObserver.on("openLoading", setLoading);
  LoadingObserver.on("closeLoading", setLoading);

  return (
    <GlobalLoadingContext.Provider
      value={{
        ...value,
        loading,
        setLoading,
      }}
    >
      {children}
    </GlobalLoadingContext.Provider>
  );
};
