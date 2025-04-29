"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { FaPython } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaRust } from "react-icons/fa6";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

export default function JavaCompiler() {
  const [code, setCode] = useState(`public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, world!\");\n    }\n}`);
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
          language: "java",
          version: "15.0.2",
          files: [{ name: "Main.java", content: code }]
        })
      });
      const data = await res.json();
      if (data.run && data.run.stderr) {
        setError(data.run.stderr);
        setOutput(data.run.stdout || "");
      } else {
        setOutput(data.run.stdout || "(No output)");
      }
    } catch (e) {
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
        {/* <a href="/java-compiler" className="p-2 rounded bg-[#2d3140]">
          <SiJava className="w-7 h-7 text-[#EA2D2E]" />
        </a> */}
        <a href="/rust-compiler" className="p-2 rounded hover:bg-[#2d3140]">
          <FaRust className="w-7 h-7 text-[#dea584]" />
        </a>
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen">
        {/* Header/Top Bar */}
        <div className="flex items-center bg-[#23272f] border-b border-[#34394b] px-4 py-2 h-14">
          <div className="flex items-center gap-2">
            {/* <SiJava className="w-7 h-7 text-[#EA2D2E]" /> */}
            <span className="text-white font-bold text-lg">Java Online Compiler</span>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-[#23272f] border border-[#34394b] rounded-t px-4 py-1 text-[#b3b9c5] text-sm font-mono">Main.java</div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={runCode} disabled={isLoading} className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-4 py-1 rounded transition-all focus:outline-none disabled:opacity-60 flex items-center gap-1">
              <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><path d="M7 6l6 4-6 4V6z" fill="#fff"/></svg>
              {isLoading ? "Running..." : "Run"}
            </button>
            <button
              className="bg-[#34394b] hover:bg-[#2d3140] text-[#b3b9c5] px-3 py-1 rounded text-sm"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(code);
                  alert('Code copied to clipboard! Share it anywhere.');
                } catch {
                  alert('Failed to copy code.');
                }
              }}
            >Share</button>
            <button onClick={() => setCode(`public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"\");\n    }\n}`)} className="bg-[#34394b] hover:bg-[#2d3140] text-[#b3b9c5] px-3 py-1 rounded text-sm">Clear</button>
            <button onClick={() => setFullscreen(f => !f)} className="ml-2 p-2 rounded bg-[#34394b] hover:bg-[#2d3140] text-[#b3b9c5]" title={fullscreen ? "Exit Fullscreen" : "Fullscreen"}>
              {fullscreen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 15v2a2 2 0 0 1-2 2H5m4-4H5m0 0v4m10-4h4m0 0v4m0-4v4m-4-4v2a2 2 0 0 0 2 2h2m-4-4V5m0 0h4m-4 0h4m0 0V5m-4 0V3a2 2 0 0 1 2-2h2m-4 4V3a2 2 0 0 0-2-2H5m4 4H5m0 0V5m0 0v4" stroke="#b3b9c5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 15v2a2 2 0 0 1-2 2H5m4-4H5m0 0v4m10-4h4m0 0v4m0-4v4m-4-4v2a2 2 0 0 0 2 2h2m-4-4V5m0 0h4m-4 0h4m0 0V5m-4 0V3a2 2 0 0 1 2-2h2m-4 4V3a2 2 0 0 0-2-2H5m4 4H5m0 0V5m0 0v4" stroke="#b3b9c5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              )}
            </button>
          </div>
        </div>
        {/* Editor/Output Split */}
        <div className="flex flex-1 min-h-0">
          {/* Editor */}
          <div className="flex-1 flex flex-col border-r border-[#34394b] bg-[#232733] min-h-0">
            <MonacoEditor
              height="100%"
              defaultLanguage="java"
              value={code}
              theme="vs-dark"
              options={{ fontSize: 16, minimap: { enabled: false }, fontLigatures: true, scrollBeyondLastLine: false, scrollbar: { vertical: "visible", horizontal: "visible" } }}
              onChange={v => setCode(v || "")}
            />
          </div>
          {/* Output */}
          <div className="flex-1 flex flex-col bg-[#232733] min-h-0">
            <div className="border-b border-[#34394b] px-4 py-2 text-[#b3b9c5] text-sm font-mono">Output</div>
            <div className="flex-1 overflow-auto px-4 py-2 font-mono text-base text-[#e2e8f0] whitespace-pre-wrap">
              {output}
              {error && (
                <div className="mt-3 text-red-400 text-sm font-semibold">
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// Style moved to globals.css or layout, not in component file.
