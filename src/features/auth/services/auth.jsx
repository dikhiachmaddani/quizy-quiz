export function login(profile) {
    localStorage.setItem("profile", JSON.stringify(profile));
}

export function logout() {
    localStorage.clear();
}

export function profile() {
  const profile = localStorage.getItem("profile");
  if (!profile) return;
  return JSON.parse(profile);
}