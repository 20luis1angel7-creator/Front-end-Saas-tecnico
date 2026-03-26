type ToastProps = {
    message: string
    type?: "success" | "error"
    onClose: () => void
}

function Toast({ message, type = "success", onClose }: ToastProps) {
    return (
        <div className="fixed top-4 right-4 z-50">
            <div
                className={`rounded-lg px-4 py-3 text-white shadow-lg ${
                    type === "success" ? "bg-green-600" : "bg-red-600"
                }`}
            >
                <div className="flex items-center gap-3">
                    <span>{message}</span>
                    <button onClick={onClose} className="font-bold">
                        x
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Toast