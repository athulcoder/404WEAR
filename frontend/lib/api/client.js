// lib/api/client.js

export async function request(url, options = {}) {
    const res = await fetch(url, {
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
        ...options,
    });

    let data;
    try {

        data = await res.json();
        console.log(data)
    } catch {
        data = null;
    }

    if (!res.ok) {
        throw new Error(data?.error || "Something went wrong");
    }

    return data;
}