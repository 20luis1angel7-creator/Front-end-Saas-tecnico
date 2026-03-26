import { useEffect, useMemo, useState } from "react";
import { API_URL } from "../../api/api";
import Toast from "../../shared/components/ui/Toast";
import type { Client } from "../../type/Client";
import { useNavigate } from "react-router-dom";

function NewOrderPage() {
    const navigate = useNavigate();

    const [cedula, setCedula] = useState("");
    const [type, setType] = useState<"INSTALLATION" | "AVERIA">("AVERIA");
    const [clients, setClients] = useState<Client[]>([]);
    const [selectedClient, setSelectedClient] = useState<Client | null>(null);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [loadingClients, setLoadingClients] = useState(true);

    const [toast, setToast] = useState<{
        message: string;
        type: "success" | "error";
    } | null>(null);

    useEffect(() => {
        const getClients = async () => {
            try {
                const res = await fetch(`${API_URL}/clients`);

                if (!res.ok) {
                    setToast({
                        message: "Error loading clients",
                        type: "error"
                    });
                    setLoadingClients(false);
                    return;
                }

                const data: Client[] = await res.json();
                setClients(data);
            } catch {
                setToast({
                    message: "Connection error loading clients",
                    type: "error"
                });
            } finally {
                setLoadingClients(false);
            }
        };

        getClients();
    }, []);

    const filteredClients = useMemo(() => {
        const text = cedula.trim().toLowerCase();

        if (!text) return [];

        return clients
            .filter((client) => {
                return (
                    client.cedula.toLowerCase().includes(text) ||
                    client.name.toLowerCase().includes(text) ||
                    client.nickname.toLowerCase().includes(text) ||
                    client.address.toLowerCase().includes(text)
                );
            })
            .slice(0, 6);
    }, [cedula, clients]);

    const handleSelectClient = (client: Client) => {
        setCedula(client.cedula);
        setSelectedClient(client);
        setShowSuggestions(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!cedula.trim()) {
            setToast({
                message: "La cédula es obligatoria",
                type: "error"
            });
            return;
        }

        try {
            const res = await fetch(`${API_URL}/orders`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    cedula: cedula.trim(),
                    type
                })
            });

            const data = await res.json();

            if (!res.ok) {
                setToast({
                    message: data.message || "Error creating order",
                    type: "error"
                });
                return;
            }

            setToast({
                message: "Order created successfully",
                type: "success"
            });

            setCedula("");
            setSelectedClient(null);
            setShowSuggestions(false);

            setTimeout(() => {
                navigate("/orders");
            }, 800);
        } catch {
            setToast({
                message: "Connection error creating order",
                type: "error"
            });
        }
    };

    return (
        <>
            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}

            <div className="px-5 py-5 text-black dark:text-white">
                <h2 className="font-bold text-xl mb-4">
                    Create order
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="max-w-2xl flex flex-col gap-4"
                >
                    <div>
                        <label className="block mb-2 font-semibold">
                            Tipo de orden
                        </label>

                        <select
                            value={type}
                            onChange={(e) =>
                                setType(e.target.value as "INSTALLATION" | "AVERIA")
                            }
                            className="w-full rounded border border-gray-300 bg-gray-200 px-3 py-2 text-black outline-none focus:border-blue-500"
                        >
                            <option value="AVERIA">Avería</option>
                            <option value="INSTALLATION">Instalación</option>
                        </select>
                    </div>

                    <div className="relative">
                        <label className="block mb-2 font-semibold">
                            Buscar cliente por cédula
                        </label>

                        <input
                            type="text"
                            value={cedula}
                            placeholder="Escribe cédula, nombre o address"
                            className="w-full rounded border border-gray-300 bg-gray-200 px-3 py-2 text-black outline-none focus:border-blue-500"
                            onChange={(e) => {
                                setCedula(e.target.value);
                                setSelectedClient(null);
                                setShowSuggestions(true);
                            }}
                            onFocus={() => setShowSuggestions(true)}
                        />

                        {showSuggestions && cedula.trim() && (
                            <div className="mt-2 w-full rounded border border-gray-300 bg-white shadow-lg dark:bg-gray-800 dark:border-gray-700">
                                {filteredClients.length > 0 ? (
                                    filteredClients.map((client) => (
                                        <button
                                            key={client.id}
                                            type="button"
                                            onClick={() => handleSelectClient(client)}
                                            className="block w-full border-b border-gray-200 px-3 py-3 text-left hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700"
                                        >
                                            <div className="font-semibold text-black dark:text-white">
                                                {client.name}
                                            </div>
                                            <div className="text-sm text-gray-700 dark:text-gray-300">
                                                Cédula: {client.cedula}
                                            </div>
                                            <div className="text-sm text-gray-700 dark:text-gray-300">
                                                Address: {client.address}
                                            </div>
                                        </button>
                                    ))
                                ) : (
                                    <div className="px-3 py-3 text-sm text-gray-600 dark:text-gray-300">
                                        {loadingClients
                                            ? "Loading clients..."
                                            : "No se encontraron clientes"}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {selectedClient && (
                        <div className="rounded border border-gray-300 bg-gray-100 p-4 dark:bg-gray-800 dark:border-gray-700">
                            <p className="text-sm">
                                <span className="font-semibold">Cliente:</span>{" "}
                                {selectedClient.name}
                            </p>
                            <p className="text-sm">
                                <span className="font-semibold">Cédula:</span>{" "}
                                {selectedClient.cedula}
                            </p>
                            <p className="text-sm">
                                <span className="font-semibold">Address:</span>{" "}
                                {selectedClient.address}
                            </p>
                            <p className="text-sm">
                                <span className="font-semibold">Phone:</span>{" "}
                                {selectedClient.phone}
                            </p>
                        </div>
                    )}

                    <div className="flex gap-3">
                        <button
                            type="submit"
                            className="rounded bg-gray-700 px-4 py-2 font-bold text-white hover:bg-gray-600 dark:bg-blue-700 dark:hover:bg-blue-600"
                        >
                            Save order
                        </button>

                        <button
                            type="button"
                            onClick={() => navigate("/orders")}
                            className="rounded border border-gray-400 px-4 py-2 font-bold text-black hover:bg-gray-200 dark:text-white dark:border-gray-600 dark:hover:bg-gray-800"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default NewOrderPage;