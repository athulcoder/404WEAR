import ReactQueryProvider from "@/providers";

export default function layout({ children }) {
    return (
        <ReactQueryProvider>
            {children}
        </ReactQueryProvider>
    );
}