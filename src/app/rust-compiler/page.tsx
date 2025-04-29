"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { FaPython } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import JavaIcon from "@/components/JavaIcon";
import { FaRust } from "react-icons/fa6";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

export default function RustCompiler() {
  const [code, setCode] = useState("fn main() {\n    println!(\"Hello, world!\");\n}");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  async function runCode() {
    setError("");
    setOutput("");
    setIsLoading(true);
    try {
      const res = await fetch("https://emkc.org/api/v2/piston/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language: "rust",
          version: "1.68.2",
          files: [{ name: "main.rs", content: code }]
        })
      });
      const data = await res.json();
      if (data.run && data.run.stderr) {
        setError(data.run.stderr);
        setOutput(data.run.stdout || "");
      } else {
        setOutput(data.run.stdout || "(No output)");
      }
    } catch (e: any) {
      setError("Failed to execute code. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={fullscreen ? "fixed inset-0 z-50 bg-[#222733] flex" : "min-h-screen w-full bg-[#222733] flex"}>
      {/* Sidebar */}
      <div className="hidden md:flex flex-col items-center bg-[#23272f] border-r border-[#34394b] py-4 px-2 w-14">
        <a href="/python-compiler" className="mb-4 p-2 rounded hover:bg-[#2d3140]">
          <FaPython className="w-7 h-7 text-[#3472A6]" />
        </a>
        <a href="/js-compiler" className="mb-4 p-2 rounded hover:bg-[#2d3140]">
          <SiJavascript className="w-7 h-7 text-[#F7E018]" />
        </a>
        <a href="/java-compiler" className="mb-4 p-2 rounded hover:bg-[#2d3140]">
          <JavaIcon className="w-7 h-7" />
        </a>
        <a href="/rust-compiler" className="p-2 rounded bg-[#2d3140]">
          <FaRust className="w-7 h-7 text-[#dea584]" />
        </a>
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen">
        {/* Header/Top Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#34394b] bg-[#23272f]">
          <div className="flex items-center space-x-2">
            <FaRust className="w-7 h-7 text-[#dea584]" />
            <span className="text-lg font-semibold text-white">Rust Online Compiler</span>
          </div>
          <button
            className="text-white bg-[#34394b] px-3 py-1 rounded hover:bg-[#2d3140]"
            onClick={() => setFullscreen(!fullscreen)}
          >
            {fullscreen ? "Exit Fullscreen" : "Fullscreen"}
          </button>
        </div>
        {/* Editor and Output */}
        <div className="flex flex-1 flex-col md:flex-row">
          <div className="flex-1 p-4 bg-[#23272f]">
            <MonacoEditor
              height="60vh"
              language="rust"
              theme="vs-dark"
              value={code}
              onChange={value => setCode(value || "")}
              options={{ fontSize: 16, minimap: { enabled: false } }}
            />
            <button
              onClick={runCode}
              className="mt-4 px-6 py-2 bg-[#dea584] text-[#23272f] font-semibold rounded hover:bg-[#c97c4a] disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? "Running..." : "Run"}
            </button>
          </div>
          <div className="md:w-1/2 p-4 bg-[#1a1d23] border-t md:border-t-0 md:border-l border-[#34394b]">
            <div className="text-white font-semibold mb-2">Output</div>
            <pre className="bg-[#23272f] text-[#dea584] p-3 rounded min-h-[120px] whitespace-pre-wrap">
              {output}
            </pre>
            {error && (
              <div className="mt-2 text-red-400 whitespace-pre-wrap">
                Error: {error}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
