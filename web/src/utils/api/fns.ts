import { API_CONFIG } from "./config";

export const create_search_url = (trackname: string) => {
  return `${API_CONFIG.base_url}?method=track.search&track=${trackname}&api_key=${API_CONFIG.api_key}&format=json`;
};
