export const getUserKey = () => {
    let userKey: string | null = "";
    try {
        userKey=localStorage.getItem("API_KEY")

    } catch {
        userKey = "DEMO_KEY"
    }
    if (!userKey) {
        userKey = "DEMO_KEY"
    }
    console.log(userKey)
    return userKey;
}