import {
  ArrowUpRight,
  Blocks,
  Box,
  Check,
  Code2,
  Command,
  GitBranch,
  LayoutDashboard,
  Search,
  Send,
  Settings,
  ShoppingBag,
  Sparkles,
  Users,
} from "lucide-react";
import type { Project } from "@/data/portfolio";

export function ProjectPreview({
  type,
  label = "CONCEPT PREVIEW · PLACEHOLDER",
}: {
  type: Project["preview"];
  label?: string;
}) {
  return (
    <div className={`project-preview preview-${type}`} aria-hidden="true">
      <div className="preview-window">
        <div className="window-top">
          <span />
          <span />
          <span />
          <div className="window-address">
            {type === "storefront"
              ? "storefront / collection"
              : type === "console"
                ? "workspace / overview"
                : type === "ai"
                  ? "assistant / playground"
                  : "platform / workspace"}
          </div>
          <ArrowUpRight size={10} />
        </div>
        {type === "storefront" ? (
          <div className="store-screen">
            <div className="store-nav">
              <strong>form & function.</strong>
              <span>Objects &nbsp; Collection &nbsp; About</span>
              <ShoppingBag size={11} />
            </div>
            <div className="store-heading">
              <small>THE EVERYDAY COLLECTION</small>
              <h4>Less, but better.</h4>
              <span>Considered objects. Everyday essentials.</span>
            </div>
            <div className="store-objects">
              <div>
                <div className="object-vase" />
                <small>Object No. 01</small>
              </div>
              <div>
                <div className="object-lamp" />
                <small>Object No. 02</small>
              </div>
              <div>
                <div className="object-box" />
                <small>Object No. 03</small>
              </div>
            </div>
          </div>
        ) : type === "console" ? (
          <div className="console-screen">
            <div className="mini-sidebar">
              <Command size={15} />
              <LayoutDashboard />
              <Users />
              <Box />
              <Settings />
            </div>
            <div className="console-main">
              <div className="console-heading">
                Overview <span>Last 30 days⌄</span>
              </div>
              <div className="mini-metrics">
                {["Activity", "Sessions", "Workflows"].map((label) => (
                  <div key={label}>
                    <small>{label}</small>
                    <b>— —</b>
                    <i />
                  </div>
                ))}
              </div>
              <div className="mini-chart">
                <div className="chart-label">Activity overview</div>
                <div className="chart-bars">
                  {[35, 55, 42, 70, 50, 82, 68, 92, 72, 100, 85, 116].map((n, i) => (
                    <div key={i} className={`bar bar-${i}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : type === "platform" ? (
          <div className="diagram-screen">
            <div className="diagram-title">
              <GitBranch size={13} /> service architecture <span>● system preview</span>
            </div>
            <div className="diagram-layer">
              <div>
                <Code2 />
                Client application
              </div>
            </div>
            <div className="diagram-connector" />
            <div className="diagram-layer">
              <div className="gateway">
                <Blocks />
                API gateway
              </div>
            </div>
            <div className="diagram-fan" />
            <div className="diagram-layer services">
              <div>
                <Box />
                Service A
              </div>
              <div>
                <Box />
                Service B
              </div>
              <div>
                <Box />
                Service C
              </div>
            </div>
          </div>
        ) : type === "crm" ? (
          <div className="crm-screen">
            <div className="crm-title">
              <Users size={15} /> Connected workspace
            </div>
            <div className="integration-flow">
              <div>
                <Users />
                <span>CRM</span>
              </div>
              <span className="flow-line" />
              <div>
                <GitBranch />
                <span>Sync</span>
              </div>
              <span className="flow-line" />
              <div>
                <Blocks />
                <span>Platform</span>
              </div>
            </div>
            <div className="sync-row">
              <Check /> Contact mapping <span>Preview</span>
            </div>
            <div className="sync-row">
              <Check /> Workflow connection <span>Preview</span>
            </div>
          </div>
        ) : (
          <div className="ai-screen">
            <div className="ai-title">
              <Sparkles size={15} /> Assistant playground <span>Concept</span>
            </div>
            <div className="ai-message user-message">How can we make this workflow simpler?</div>
            <div className="ai-message">
              <Sparkles size={13} />
              <div>
                <span className="skeleton-line" />
                <span className="skeleton-line" />
                <span className="skeleton-line short" />
              </div>
            </div>
            <div className="ai-input">
              <Search size={12} /> Ask a question… <Send size={12} />
            </div>
          </div>
        )}
      </div>
      <span className="preview-label">{label}</span>
    </div>
  );
}
