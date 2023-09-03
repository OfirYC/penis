import type { TelegramWebApps } from "telegram-webapps-types";
export declare namespace TelegramWebApp {
  /**
   * {@link https://core.telegram.org/bots/webapps#themeparams}
   */
  interface ThemeParams {
    bg_color?: string;
    text_color?: string;
    hint_color?: string;
    link_color?: string;
    button_color?: string;
    button_text_color?: string;
  }

  /**
   * {@link https://core.telegram.org/bots/webapps#mainbutton}
   */
  interface MainButton {
    text: string;
    color: string;
    textColor: string;
    isVisible: boolean;
    isActive: boolean;
    readonly isProgressVisible: boolean;

    setText(text: string): MainButton;

    show(): MainButton;

    hide(): MainButton;

    enable(): MainButton;

    disable(): MainButton;

    showProgress(leaveActive?: boolean): MainButton;

    hideProgress(): MainButton;
    onClick(callback: () => void);

    setParams(params: {
      text?: MainButton["text"];
      color?: MainButton["color"];
      text_color?: MainButton["textColor"];
      is_active?: MainButton["isActive"];
      is_visible?: MainButton["isVisible"];
    }): MainButton;
  }

  /**
   * {@link https://core.telegram.org/bots/webapps#webappuser}
   */
  interface WebAppUser {
    id: number;
    is_bot?: boolean;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code?: string;
    photo_url?: true;
  }

  /**
   * {@link https://core.telegram.org/bots/webapps#webappinitdata}
   */
  interface WebAppInitData {
    query_id?: string;
    user?: WebAppUser;
    receiver?: WebAppUser;
    chat_type?: "sender" | "private" | "group" | "supergroup" | "channel";
    chat_instance?: string;
    start_param?: string;
    auth_date: number;
    hash: string;
  }

  interface Event {
    onEvent(
      eventType: "viewportChanged",
      eventHandler: (payload: { isStateStable: boolean }) => void
    );

    onEvent(
      eventType: "themeChanged" | "mainButtonClicked",
      eventHandler: () => void
    );

    offEvent(
      eventType: "viewportChanged" | "themeChanged" | "mainButtonClicked",
      eventHandler: (...args: any[]) => void
    );
  }

  /**
   * {@link https://core.telegram.org/bots/webapps#initializing-web-apps}
   */
  interface WebApp extends Event {
    initData: string;
    initDataUnsafe: WebAppInitData;
    platform: string;
    colorScheme: "dark" | "light";
    themeParams: ThemeParams;
    isExpanded: boolean;
    viewportHeight: number;
    viewportStableHeight: number;
    MainButton: MainButton;

    sendData(data: unknown);

    ready();

    expand();

    close();
  }
}

export declare namespace TelegramWebAppVersion6_1 {
  interface ThemeParams extends TelegramWebApp.ThemeParams {
    secondary_bg_color?: string;
  }

  /**
   * {@link https://core.telegram.org/bots/webapps#backbutton}
   */
  interface BackButton {
    isVisible: boolean;

    onClick(cb: () => void): BackButton;

    offClick(cb: () => void): BackButton;

    show(): BackButton;

    hide(): BackButton;
  }

  interface MainButton extends TelegramWebApp.MainButton {
    offClick(text: () => void): MainButton;
  }

  /**
   * {@link https://core.telegram.org/bots/webapps#webappchat}
   */
  interface WebAppChat {
    id: number;
    type: "group" | "supergroup" | "channel";
    title: string;
    username?: string;
    photo_url?: string;
  }

  interface WebAppInitData extends TelegramWebApp.WebAppInitData {
    chat?: WebAppChat;
    can_send_after?: number;
  }

  /**
   * {@link https://core.telegram.org/bots/webapps#hapticfeedback}
   */
  interface HapticFeedback {
    impactOccurred(
      style: "light" | "medium" | "heavy" | "rigid" | "soft"
    ): HapticFeedback;

    notificationOccurred(type: "error" | "success" | "warning"): HapticFeedback;

    selectionChanged(): HapticFeedback;
  }

  interface Event {
    onEvent(
      eventType: "backButtonClicked" | "settingsButtonClicked",
      eventHandler: () => void
    );

    onEvent(
      eventType: "invoiceClosed",
      eventHandler: (payload: {
        url: string;
        status: "paid" | "cancelled" | "failed" | "pending";
      }) => void
    );

    offEvent(
      eventType:
        | "backButtonClicked"
        | "settingsButtonClicked"
        | "invoiceClosed",
      eventHandler: (...args: any[]) => void
    );
  }

  interface WebApp extends TelegramWebApp.WebApp, Event {
    themeParams: ThemeParams;
    initDataUnsafe: WebAppInitData;
    MainButton: MainButton;
    version: string;
    headerColor: string;
    backgroundColor: string;
    BackButton: BackButton;
    HapticFeedback: HapticFeedback;
    isVersionAtLeast(version: string | number): boolean;
    setHeaderColor(color: "bg_color" | "secondary_bg_color" | string);
    setBackgroundColor(color: "bg_color" | "secondary_bg_color" | string);
    openLink(url: string);
    openTelegramLink(url: string);
    openInvoice(
      url: string,
      callback?: (status: "paid" | "cancelled" | "failed" | "pending") => void
    );
  }
}

export declare namespace TelegramWebAppVersion6_2 {
  /**
   * {@link https://core.telegram.org/bots/webapps#webappuser}
   */
  interface WebAppUser extends TelegramWebApp.WebAppUser {
    is_premium?: true;
  }

  /**
   * {@link https://core.telegram.org/bots/webapps#webappinitdata}
   */
  interface WebAppInitData extends TelegramWebAppVersion6_1.WebAppInitData {
    user?: WebAppUser;
    receiver?: WebAppUser;
  }

  /**
   * {@link https://core.telegram.org/bots/webapps#popupbutton}
   */
  interface PopupButton {
    id?: string;
    type?: string;
    text?: string;
  }

  /**
   * {@link https://core.telegram.org/bots/webapps#popupparams}
   */
  interface PopupParams {
    title?: string;
    message: string;
    buttons?: PopupButton[];
  }

  interface Event {
    onEvent(
      eventType: "popupClosed",
      eventHandler: (payload: { button_id: string }) => void
    );

    offEvent(eventType: "popupClosed", eventHandler: (...args: any[]) => void);
  }

  interface WebApp extends TelegramWebAppVersion6_1.WebApp, Event {
    initDataUnsafe: WebAppInitData;
    isClosingConfirmationEnabled: string;
    enableClosingConfirmation();
    disableClosingConfirmation();
    showPopup(params: PopupParams, callback?: (id: string) => void);
    showAlert(message: string, callback?: () => void);
    showConfirm(message: string, callback?: (isOk: boolean) => void);
  }
}

export declare namespace TelegramWebAppVersion6_4 {
  /**
   * {@link https://core.telegram.org/bots/webapps#scanqrpopupparams}
   */
  interface ScanQrPopupParams {
    text?: string;
  }

  interface Event {
    onEvent(eventType: "qrTextReceived", eventHandler: (data: string) => void);

    onEvent(
      eventType: "clipboardTextReceived",
      eventHandler: (payload: { data: string | null }) => void
    );

    offEvent(
      eventType: "qrTextReceived" | "clipboardTextReceived",
      eventHandler: (...args: any[]) => void
    );
  }

  interface WebApp extends TelegramWebAppVersion6_2.WebApp, Event {
    openLink(url: string, options?: { try_instant_view: true });

    platform: string;
    showScanQrPopup(
      params: ScanQrPopupParams,
      callback?: (data: string) => void | boolean
    );
    closeScanQrPopup();
    readTextFromClipboard(callback?: (data: string) => void);
  }
}

export declare namespace TelegramWebAppVersion6_7 {
  interface WebApp extends TelegramWebAppVersion6_4.WebApp {
    switchInlineQuery(query: string, choose_chat_types?: unknown);
  }
}

export type WebApp = TelegramWebApp.WebApp &
  Partial<TelegramWebAppVersion6_1.WebApp> &
  Partial<TelegramWebAppVersion6_2.WebApp> &
  Partial<TelegramWebAppVersion6_4.WebApp> &
  Partial<TelegramWebAppVersion6_7.WebApp>;

declare global {
  interface Window {
    Telegram: TelegramWebApps.SDK & { WebApp: WebApp };
  }

  namespace NodeJS {
    interface ProcessEnv {
      /** Authorization token for the bot. This is used to validate the hash's authenticity. */
      BOT_TOKEN: string;
    }
  }
}

export {};
