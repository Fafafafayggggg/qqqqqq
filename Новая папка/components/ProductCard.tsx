"use client"
import { motion } from "framer-motion"
import axios from "axios"
import { useState } from "react"

export default function ProductCard({ name }) {
  const [tradeUrl, setTradeUrl] = useState("")

  const handleOrder = async () => {
    if (!tradeUrl) return alert("Вставь Trade URL")

    await axios.post("/api/order", { product: name, tradeUrl })

    alert("Заявка отправлена")
    setTradeUrl("")
  }

  return (
    <motion.div whileHover={{ y: -10 }} className="bg-white/5 p-6 rounded-2xl backdrop-blur-xl">
      <h3 className="text-xl font-semibold mb-4">{name}</h3>
      <input
        value={tradeUrl}
        onChange={(e) => setTradeUrl(e.target.value)}
        placeholder="Steam Trade URL"
        className="w-full p-3 mb-4 rounded bg-black/40"
      />
      <button
        onClick={handleOrder}
        className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-400"
      >
        Купить за скины
      </button>
    </motion.div>
  )
}