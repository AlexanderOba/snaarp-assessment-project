export interface User {
    name: string;
    status: "online" | "offline";
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