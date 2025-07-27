"use client"

import type React from "react"

import { useState } from "react"
import { X, Send } from "lucide-react"
import Image from "next/image"

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Eddie, Fast Eddie's AI Assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ])

  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = async () => {
    if (message.trim() && !isLoading) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        isBot: false,
        timestamp: new Date(),
      }

      setMessages([...messages, newMessage])
      const currentMessage = message
      setMessage("")
      setIsLoading(true)

      try {
        const requestBody = { query: currentMessage }

        const response = await fetch("https://edtheai-production.up.railway.app/ask", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(requestBody),
        })

        if (!response.ok) {
          const errorText = await response.text()
          throw new Error(`API returned ${response.status}: ${errorText}`)
        }

        const data = await response.json()

        const botResponse = {
          id: messages.length + 2,
          text:
            data.answer ||
            data.response ||
            data.message ||
            data.reply ||
            "I received your message but couldn't find a proper response field.",
          isBot: true,
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, botResponse])
      } catch (error) {
        console.error("Detailed error:", error)

        let errorMessage = "I'm sorry, I'm having trouble connecting right now. "

        if (error instanceof TypeError && error.message.includes("fetch")) {
          errorMessage += "There seems to be a network issue. "
        } else if (error.message.includes("422")) {
          errorMessage += "The server didn't understand the request format. "
        } else if (error.message.includes("500")) {
          errorMessage += "The server encountered an error. "
        } else if (error.message.includes("CORS")) {
          errorMessage += "There's a cross-origin request issue. "
        }

        errorMessage += "Please try calling us at (519) 620-3028 or visit us at 688 Hespeler Rd, Cambridge!"

        const errorResponse = {
          id: messages.length + 2,
          text: errorMessage,
          isBot: true,
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, errorResponse])
      } finally {
        setIsLoading(false)
      }
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Widget Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 bg-white text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 ${
          isOpen ? "hidden" : "block"
        }`}
      >
        <Image
          src="/images/eddie-mascot.png"
          alt="Eddie - Fast Eddie's AI Assistant"
          width={48}
          height={48}
          className="w-12 h-12"
        />
      </button>

      {/* Chat Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-end p-6">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md h-96 flex flex-col animate-in slide-in-from-bottom-4 duration-300">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-red-500 to-yellow-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <Image src="/images/eddie-mascot.png" alt="Eddie" width={24} height={24} className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold">Eddie's Assistant</h3>
                  <p className="text-sm opacity-90">{isLoading ? "Typing..." : "Online now"}</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}>
                  <div
                    className={`max-w-xs px-4 py-2 rounded-2xl ${
                      msg.isBot ? "bg-gray-100 text-gray-800" : "bg-gradient-to-r from-red-500 to-yellow-500 text-white"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-xs px-4 py-2 rounded-2xl bg-gray-100 text-gray-800">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask Eddie about menu, hours, location..."
                  disabled={isLoading}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 disabled:bg-gray-100"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading || !message.trim()}
                  className={`p-2 rounded-full transition-all ${
                    isLoading || !message.trim()
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-red-500 to-yellow-500 hover:shadow-lg"
                  } text-white`}
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
