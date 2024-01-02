import { get } from "@/net";

export function fetchMissions() {
    return new Promise((resolve, reject) => {
        get("/api/missions",
            (data) => {
                resolve(data);
            },
            (message) => {
                console.error("Failed to fetch missions data: " + message);
                reject(message);
            }
        );
    });
}
