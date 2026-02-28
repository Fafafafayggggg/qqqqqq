"use client"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-extrabold mb-6"
      >
        Твои скины — это деньги.
      </motion.h1>

      <p className="text-gray-400 mb-8">
        Обменивай предметы Steam на ключи и подписки за секунды.
      </p>

      <a href="#catalog" className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-400 hover:scale-105 transition">
        Начать
      </a>
    </section>
  )
}