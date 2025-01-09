export type ColumnToggleState = Record<string, boolean>;

export interface User {
    name: string;
    status: "online" | "offline";
    image: string
}

export interface ToggleStates {
    [userName: string]: {
        [columnName: string]: boolean;
    };
}

export interface SelectedEvent {
    user: string;
    event: string;
}