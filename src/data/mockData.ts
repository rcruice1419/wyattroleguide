import type { RoleProfile, UseCase, WyattFeature } from "../types";

const useCase = (definition: UseCase) => definition;

export const wyattFeatures: WyattFeature[] = [
  {
    id: "roundups",
    title: "Roundups",
    shortTitle: "Roundups",
    description:
      "Automated summaries, monitoring, and recurring insight delivery tailored to a role, team, or business process.",
    benefits: [
      "Refreshable dashboards for project, financial, and staffing health",
      "Narrative summaries for leaders who need fast signal, not more clicking",
      "Strong fit for recurring visibility and exception monitoring"
    ],
    color: "var(--accent-sky)"
  },
  {
    id: "chores",
    title: "Chores",
    shortTitle: "Chores",
    description:
      "Repeatable action-oriented workflows that check, notify, assign, and move recurring work forward.",
    benefits: [
      "Turns manual follow-up into scheduled routines",
      "Works well for billing readiness, exception review, and reminders",
      "Keeps owners and next steps visible"
    ],
    color: "var(--accent-amber)"
  },
  {
    id: "chats",
    title: "Chats",
    shortTitle: "Chats",
    description:
      "Conversational Q&A and analysis that helps users get exact answers from Wyatt without building reports first.",
    benefits: [
      "Fast answers for project, finance, and staffing questions",
      "Good entry point for new users and ad hoc analysis",
      "Useful when the question changes every day"
    ],
    color: "var(--accent-teal)"
  },
  {
    id: "integrations",
    title: "Integrations",
    shortTitle: "Integrations",
    description:
      "Connected systems and data sources that make Wyatt more useful across ERP, CRM, project operations, and collaboration tools.",
    benefits: [
      "Connects Unanet AE data with supporting business context",
      "Reduces swivel-chair work across systems",
      "Improves trust in workflows that span teams"
    ],
    color: "var(--accent-coral)"
  },
  {
    id: "labs",
    title: "Labs",
    shortTitle: "Labs",
    description:
      "Experimental and advanced capabilities for power users, pilots, scenario testing, and process innovation.",
    benefits: [
      "Best for high-leverage pilot ideas",
      "Supports scenario modeling and advanced workflows",
      "Helps teams test new operating plays before formal rollout"
    ],
    color: "var(--accent-violet)"
  }
];

export const roleProfiles: RoleProfile[] = [
  {
    id: "executive-principal",
    title: "Executive / Principal",
    shortTitle: "Executive",
    summary:
      "Needs a fast read on business health across projects, staffing, clients, and financial risk without digging through multiple reports.",
    whatTheyCareAbout: [
      "Firm-level performance",
      "Client and delivery risk",
      "Where leadership attention is needed now"
    ],
    priorities: [
      "Spot emerging risk across offices, markets, and major projects",
      "Get a single morning view of delivery, staffing, and financial pressure",
      "Tie strategic decisions back to backlog, margin, and client health"
    ],
    recommendedFeatureIds: ["roundups", "chats", "labs"],
    compareHighlights: [
      "Strategic decision support",
      "Cross-functional risk visibility",
      "Board and principal meeting readiness"
    ],
    startingPoint: {
      easiestUseCaseId: "exec-daily-portfolio-roundup",
      highestValueUseCaseId: "exec-strategy-scenario-lab",
      dailyHabit:
        "Start each morning with the executive roundup, then use chat to drill into any flagged project, client, or staffing risk."
    }
  },
  {
    id: "cfo-finance-leader",
    title: "CFO / Finance Leader",
    shortTitle: "CFO",
    summary:
      "Focuses on cash flow, billing readiness, AR, margin trends, labor demand, and project-level financial exceptions.",
    whatTheyCareAbout: [
      "Cash conversion",
      "Project profitability",
      "Forecast accuracy"
    ],
    priorities: [
      "See billing, cash, and AR risk before close becomes a scramble",
      "Understand margin deterioration quickly and at project level",
      "Link backlog and staffing demand to financial decisions"
    ],
    recommendedFeatureIds: ["roundups", "chores", "chats"],
    compareHighlights: [
      "Financial control",
      "Margin protection",
      "Close and forecast speed"
    ],
    startingPoint: {
      easiestUseCaseId: "cfo-cash-risk-roundup",
      highestValueUseCaseId: "cfo-close-variance-chore",
      dailyHabit:
        "Use the cash and margin roundup each morning, then ask Wyatt follow-up questions on any account, project, or billing blocker."
    }
  },
  {
    id: "controller",
    title: "Controller",
    shortTitle: "Controller",
    summary:
      "Owns clean close, invoice accuracy, AR follow-up, and project accounting exceptions across the firm.",
    whatTheyCareAbout: [
      "Invoice quality",
      "GL integrity",
      "Exception resolution"
    ],
    priorities: [
      "Reduce manual exception review during billing and close",
      "Catch invoice, AR, and project accounting issues early",
      "Give the finance team a tighter operating rhythm"
    ],
    recommendedFeatureIds: ["chores", "roundups", "chats"],
    compareHighlights: [
      "Close acceleration",
      "Lower exception volume",
      "Better finance team throughput"
    ],
    startingPoint: {
      easiestUseCaseId: "controller-invoice-exception-chore",
      highestValueUseCaseId: "controller-ar-and-close-roundup",
      dailyHabit:
        "Review the billing exception queue first, then use chat for root-cause checks on any GL, invoice, or project accounting anomaly."
    }
  },
  {
    id: "project-manager",
    title: "Project Manager",
    shortTitle: "Project Manager",
    summary:
      "Needs fast answers on project health, staffing gaps, billing blockers, fee burn, deadlines, and action items.",
    whatTheyCareAbout: [
      "Project health",
      "Budget and staffing",
      "Keeping delivery moving"
    ],
    priorities: [
      "Understand project risk without pulling multiple reports",
      "Keep billing, time, and staffing issues from slipping",
      "Turn exceptions into next actions quickly"
    ],
    recommendedFeatureIds: ["chats", "roundups", "chores"],
    compareHighlights: [
      "Daily delivery visibility",
      "Faster issue triage",
      "Less spreadsheet work"
    ],
    startingPoint: {
      easiestUseCaseId: "pm-project-health-chat",
      highestValueUseCaseId: "pm-billing-readiness-roundup",
      dailyHabit:
        "Ask Wyatt for a morning project health check, then refresh the billing and staffing views before your team standup."
    }
  },
  {
    id: "operations-leader",
    title: "Operations Leader",
    shortTitle: "Operations",
    summary:
      "Connects delivery, utilization, forecasting, staffing, and systems data to keep the business operating smoothly.",
    whatTheyCareAbout: [
      "Delivery performance",
      "Capacity planning",
      "Cross-system signal"
    ],
    priorities: [
      "See operational bottlenecks across offices and teams",
      "Balance staffing with forecasted delivery demand",
      "Bring ERP, CRM, and project activity into one operating view"
    ],
    recommendedFeatureIds: ["roundups", "integrations", "chores"],
    compareHighlights: [
      "Cross-functional coordination",
      "Staffing and utilization balance",
      "Operational exception management"
    ],
    startingPoint: {
      easiestUseCaseId: "ops-delivery-command-center-roundup",
      highestValueUseCaseId: "ops-forecast-gap-chore",
      dailyHabit:
        "Use the operations command center to spot constraints, then let Wyatt run weekly staffing and delivery follow-up chores."
    }
  },
  {
    id: "marketing-business-development",
    title: "Marketing / Business Development",
    shortTitle: "Marketing / BD",
    summary:
      "Needs better visibility into pursuits, proposals, CRM activity, client intelligence, and where wins create delivery pressure.",
    whatTheyCareAbout: [
      "Pipeline quality",
      "Proposal throughput",
      "Client context"
    ],
    priorities: [
      "Turn CRM activity into better pipeline signal",
      "Keep pursuit and proposal teams aligned on priorities",
      "Use project and client history to sharpen go/no-go decisions"
    ],
    recommendedFeatureIds: ["roundups", "integrations", "chats"],
    compareHighlights: [
      "Pursuit visibility",
      "Proposal velocity",
      "Client intelligence"
    ],
    startingPoint: {
      easiestUseCaseId: "bd-pursuit-roundup",
      highestValueUseCaseId: "bd-crm-integration-view",
      dailyHabit:
        "Start with the pursuits roundup, then use chat to pull project, client, and sector intelligence before proposal reviews."
    }
  },
  {
    id: "accounting-staff",
    title: "Accounting Staff",
    shortTitle: "Accounting",
    summary:
      "Works through invoice prep, AR follow-up, transaction review, and daily project accounting questions.",
    whatTheyCareAbout: [
      "Cleaner billing cycles",
      "Less manual reconciliation",
      "Faster answers"
    ],
    priorities: [
      "Reduce follow-up work for invoices and AR",
      "Answer project accounting questions without waiting on custom reports",
      "See the next actions that keep close moving"
    ],
    recommendedFeatureIds: ["chores", "chats", "roundups"],
    compareHighlights: [
      "Faster task execution",
      "Better invoice hygiene",
      "Less back-and-forth"
    ],
    startingPoint: {
      easiestUseCaseId: "acct-project-financial-lookup-chat",
      highestValueUseCaseId: "acct-invoice-follow-up-chore",
      dailyHabit:
        "Use chat for project and invoice lookup questions, then clear the Wyatt follow-up queue for anything blocking billing or cash collection."
    }
  },
  {
    id: "hr-talent-recruiting",
    title: "HR / Talent / Recruiting",
    shortTitle: "HR / Talent",
    summary:
      "Needs to connect staffing shortages, hiring pipeline, onboarding workload, and utilization concerns back to real delivery demand.",
    whatTheyCareAbout: [
      "Hiring demand",
      "Staffing gaps",
      "Onboarding readiness"
    ],
    priorities: [
      "See future hiring needs based on work already sold or planned",
      "Coordinate recruiting around discipline-level shortages",
      "Track onboarding and staffing readiness as part of delivery planning"
    ],
    recommendedFeatureIds: ["chores", "roundups", "labs"],
    compareHighlights: [
      "Hiring aligned to forecast",
      "Less reactive recruiting",
      "Better onboarding timing"
    ],
    startingPoint: {
      easiestUseCaseId: "hr-staffing-shortage-roundup",
      highestValueUseCaseId: "hr-hiring-scenario-lab",
      dailyHabit:
        "Refresh the staffing shortage view weekly and use Wyatt chores to keep recruiters and hiring managers aligned on the most urgent roles."
    }
  },
  {
    id: "it-systems-admin",
    title: "IT / Systems Admin",
    shortTitle: "IT / Admin",
    summary:
      "Supports integrations, permissions, usage governance, and the reliability of Wyatt across the firm.",
    whatTheyCareAbout: [
      "System connectivity",
      "Permissions and governance",
      "Adoption health"
    ],
    priorities: [
      "Understand which systems are connected and where data trust is strongest",
      "Keep access, permissions, and admin workflows under control",
      "See how users are adopting Wyatt across roles"
    ],
    recommendedFeatureIds: ["integrations", "chores", "labs"],
    compareHighlights: [
      "Governance",
      "Integration readiness",
      "Adoption support"
    ],
    startingPoint: {
      easiestUseCaseId: "it-integration-health-roundup",
      highestValueUseCaseId: "it-permission-audit-chore",
      dailyHabit:
        "Use the integration health view to check system status, then review the admin queue for permissions, connector, or usage anomalies."
    }
  },
  {
    id: "department-leader",
    title: "Department Leader",
    shortTitle: "Department Leader",
    summary:
      "Owns performance for a discipline or business unit and needs visibility into workload, staffing, margin, and client risk.",
    whatTheyCareAbout: [
      "Team performance",
      "Capacity and utilization",
      "Department profitability"
    ],
    priorities: [
      "See department-level margin and delivery risk quickly",
      "Balance staffing across teams and offices",
      "Know which jobs or clients need leadership intervention"
    ],
    recommendedFeatureIds: ["roundups", "chats", "chores"],
    compareHighlights: [
      "Discipline-level visibility",
      "Resource balance",
      "Leadership action cues"
    ],
    startingPoint: {
      easiestUseCaseId: "dept-discipline-performance-roundup",
      highestValueUseCaseId: "dept-portfolio-review-chore",
      dailyHabit:
        "Review the discipline performance roundup before department meetings, then use chat for any job, team, or margin question that needs deeper detail."
    }
  },
  {
    id: "pmo-resource-manager",
    title: "PMO / Resource Manager",
    shortTitle: "PMO / Resource",
    summary:
      "Coordinates staffing, allocations, conflicts, and delivery timing across projects, phases, and disciplines.",
    whatTheyCareAbout: [
      "Allocations",
      "Upcoming demand",
      "Resource conflicts"
    ],
    priorities: [
      "Spot allocation conflicts before they hit delivery",
      "Match available staff to the right work quickly",
      "See upcoming staffing demand by role, office, and project phase"
    ],
    recommendedFeatureIds: ["roundups", "chores", "chats"],
    compareHighlights: [
      "Resource allocation clarity",
      "Conflict resolution",
      "Faster resourcing decisions"
    ],
    startingPoint: {
      easiestUseCaseId: "pmo-resource-demand-roundup",
      highestValueUseCaseId: "pmo-conflict-resolution-chore",
      dailyHabit:
        "Refresh the demand and allocation view every morning, then use chat to test alternates before reassigning people."
    }
  },
  {
    id: "junior-staff-general-employee",
    title: "Junior Staff / General Employee",
    shortTitle: "General Employee",
    summary:
      "Needs simple, low-friction help with project info, task reminders, deadlines, and everyday questions.",
    whatTheyCareAbout: [
      "Fast answers",
      "Clear next steps",
      "Less hunting for information"
    ],
    priorities: [
      "Get project context without asking multiple people",
      "Stay current on deadlines, meetings, and daily work",
      "Use Wyatt as a productivity layer rather than a reporting tool"
    ],
    recommendedFeatureIds: ["chats", "chores", "roundups"],
    compareHighlights: [
      "Low-friction adoption",
      "Daily productivity",
      "Simple onboarding path"
    ],
    startingPoint: {
      easiestUseCaseId: "staff-project-context-chat",
      highestValueUseCaseId: "staff-personal-priority-roundup",
      dailyHabit:
        "Use chat first for project questions, then rely on your daily Wyatt roundup and reminders to keep work moving."
    }
  }
];

export const useCases: UseCase[] = [
  useCase({
    id: "exec-daily-portfolio-roundup",
    title: "Executive Daily Portfolio Roundup",
    roleId: "executive-principal",
    featureId: "roundups",
    shortDescription:
      "A principal-level morning briefing across project risk, staffing pressure, financial exceptions, and major client movement.",
    businessProblem:
      "Executives often piece together delivery, finance, and client signal from multiple reports and conversations before leadership meetings.",
    examplePrompt:
      "Build my morning executive roundup across at-risk projects, staffing gaps, large AR exposures, margin drops, and important client activity.",
    workflow: [
      "Pull project, staffing, and financial exceptions from connected systems.",
      "Rank the items that changed most since the prior refresh.",
      "Deliver a short narrative with links to drill-down detail by office, market, and project."
    ],
    frequency: "Daily",
    difficulty: "Easy",
    valueLevel: "Strategic",
    measurableOutcome:
      "Cuts executive prep from 45 minutes to under 10 and surfaces the top 5 issues before the first leadership meeting.",
    businessValue:
      "Gives principals a single source of truth for where leadership attention should go now.",
    tags: ["leadership", "portfolio", "risk"]
  }),
  useCase({
    id: "exec-risk-drilldown-chat",
    title: "Executive Risk Drilldown Chat",
    roleId: "executive-principal",
    featureId: "chats",
    shortDescription:
      "Lets leaders ask follow-up questions on revenue, client, staffing, or project risk without waiting on finance or operations.",
    businessProblem:
      "Once a risk is identified, leaders need quick context before deciding whether to escalate, intervene, or leave the team to handle it.",
    examplePrompt:
      "Which client relationships are most exposed right now because of project delays, staffing gaps, or margin deterioration?",
    workflow: [
      "Start from a flagged issue in the roundup.",
      "Use chat to inspect the project, client, and office-level drivers.",
      "Capture next-step talking points for the leadership team."
    ],
    frequency: "Several times per week",
    difficulty: "Easy",
    valueLevel: "High",
    measurableOutcome:
      "Reduces turnaround on leadership follow-up questions from hours to minutes.",
    businessValue:
      "Improves executive response speed without creating more reporting burden.",
    tags: ["leadership", "clients", "escalation"]
  }),
  useCase({
    id: "exec-strategy-scenario-lab",
    title: "Executive Strategy Scenario Lab",
    roleId: "executive-principal",
    featureId: "labs",
    shortDescription:
      "Tests 'what happens if' scenarios around hiring, backlog shifts, large pursuits, or troubled offices.",
    businessProblem:
      "Strategic decisions in AE firms often require fast scenario thinking across staffing, margin, and timing, but those models are rarely easy to produce.",
    examplePrompt:
      "If we win the top three healthcare pursuits this quarter, what delivery, staffing, and margin pressure should we expect by office?",
    workflow: [
      "Select the strategic scenario to test.",
      "Pull likely demand, staffing, and financial impact assumptions.",
      "Return a scenario summary with expected constraints and decision options."
    ],
    frequency: "Monthly or as needed",
    difficulty: "Advanced",
    valueLevel: "Strategic",
    measurableOutcome:
      "Compresses scenario planning work from multiple spreadsheet iterations into a same-day decision aid.",
    businessValue:
      "Supports principal-level planning with faster and better-connected assumptions.",
    tags: ["planning", "scenario", "growth"]
  }),
  useCase({
    id: "cfo-cash-risk-roundup",
    title: "Cash, Billing, and Margin Risk Roundup",
    roleId: "cfo-finance-leader",
    featureId: "roundups",
    shortDescription:
      "A CFO dashboard for billing blockers, AR exposure, cash conversion risk, margin shifts, and project financial exceptions.",
    businessProblem:
      "Finance leaders need a fast view of what threatens cash and profitability, especially during billing and close windows.",
    examplePrompt:
      "Summarize cash flow risk, blocked billing, overdue AR, margin deterioration, and project financial exceptions for this week.",
    workflow: [
      "Aggregate billing status, AR aging, WIP, and project margin changes.",
      "Highlight the largest changes and exceptions by office, project, and PM.",
      "Surface recommended follow-ups for finance and operations."
    ],
    frequency: "Daily",
    difficulty: "Easy",
    valueLevel: "Strategic",
    measurableOutcome:
      "Improves billing and cash conversion visibility daily instead of only at close.",
    businessValue:
      "Keeps the CFO focused on the handful of issues that materially affect revenue timing and margin.",
    tags: ["finance", "cash", "margin"]
  }),
  useCase({
    id: "cfo-margin-exception-chat",
    title: "Margin Exception Investigation",
    roleId: "cfo-finance-leader",
    featureId: "chats",
    shortDescription:
      "Answers CFO questions about where and why profitability is changing at project or portfolio level.",
    businessProblem:
      "Project margin questions are often specific and urgent, but hard to answer without digging through multiple project and GL reports.",
    examplePrompt:
      "Which projects had the biggest margin drop this month, what changed, and which ones are likely to miss target profitability next quarter?",
    workflow: [
      "Ask a portfolio or project-level profitability question.",
      "Review the drivers Wyatt identifies across labor, consultants, billing, and write-downs.",
      "Use the answer to direct controller or operations follow-up."
    ],
    frequency: "Daily",
    difficulty: "Moderate",
    valueLevel: "High",
    measurableOutcome:
      "Cuts project-level financial investigation time from a half day to a few minutes.",
    businessValue:
      "Makes finance leadership faster and more specific when asking for operational action.",
    tags: ["profitability", "analysis", "exceptions"]
  }),
  useCase({
    id: "cfo-gl-investigation-chat",
    title: "Financial Reporting and GL Investigation",
    roleId: "cfo-finance-leader",
    featureId: "chats",
    shortDescription:
      "Answers CFO questions about account spikes, overhead variance, and consolidated financial views without building custom reports first.",
    businessProblem:
      "Finance leaders need quick, defensible answers on GL movement and reporting structure, but month-end questions often require manual report building and transaction review.",
    examplePrompt:
      "Why did GL account 6100 spike in March, show me the transactions behind office overhead variance this month, and build my consolidated financial view by office, discipline, and market.",
    workflow: [
      "Ask Wyatt for the GL movement or reporting view in natural language.",
      "Review the transactions, variance drivers, and breakout views returned.",
      "Use the result to support close, executive review, or controller follow-up."
    ],
    frequency: "Several times per week",
    difficulty: "Moderate",
    valueLevel: "High",
    measurableOutcome:
      "Reduces manual GL review and speeds month-end analysis from hours to minutes.",
    businessValue:
      "Gives finance leaders cleaner, faster answers on financial reporting without custom report work.",
    tags: ["gl", "financial-reporting", "variance"]
  }),
  useCase({
    id: "cfo-staffing-demand-chat",
    title: "Forecasting, Staffing, and Labor Demand Chat",
    roleId: "cfo-finance-leader",
    featureId: "chats",
    shortDescription:
      "Connects backlog, staffing demand, and margin pressure by discipline and office.",
    businessProblem:
      "CFOs need to see staffing demand before it appears as a margin or delivery problem, but headcount pressure is often hard to connect back to sold and planned work.",
    examplePrompt:
      "What headcount will we need by discipline over the next 90 days, where do we have labor demand that exceeds current capacity, and which offices are overstaffed or understaffed based on backlog?",
    workflow: [
      "Ask Wyatt for a discipline and office-level staffing forecast.",
      "Review the capacity gaps, surpluses, and the backlog behind them.",
      "Use the answer to guide hiring, reallocation, and financial planning decisions."
    ],
    frequency: "Weekly",
    difficulty: "Moderate",
    valueLevel: "High",
    measurableOutcome:
      "Improves staffing visibility before shortages or idle capacity show up in financial results.",
    businessValue:
      "Helps the CFO connect backlog, staffing demand, and future margin sooner.",
    tags: ["staffing", "forecasting", "backlog"]
  }),
  useCase({
    id: "cfo-billing-cash-chat",
    title: "Billing, Cash, and Collections Risk Chat",
    roleId: "cfo-finance-leader",
    featureId: "chats",
    shortDescription:
      "Surfaces blocked billing, high-WIP / low-billing projects, and overdue AR balances with the highest cash impact.",
    businessProblem:
      "Revenue conversion and cash risk are often spread across billing, project, and collections workflows, making it hard for finance to prioritize quickly.",
    examplePrompt:
      "What is blocking billing this period, which projects have high WIP but low billing progress, and which overdue AR balances have the largest cash impact?",
    workflow: [
      "Ask Wyatt for the highest-impact billing and collections bottlenecks.",
      "Review blocked billing, WIP-to-billing mismatches, and large overdue balances.",
      "Use the result to focus finance and project follow-up on the biggest cash levers."
    ],
    frequency: "Daily during billing and close",
    difficulty: "Easy",
    valueLevel: "High",
    measurableOutcome:
      "Improves prioritization of the billing and AR issues with the largest cash effect.",
    businessValue:
      "Helps finance convert revenue and cash faster by focusing on the right bottlenecks first.",
    tags: ["billing", "cash", "collections"]
  }),
  useCase({
    id: "cfo-policy-anomaly-chat",
    title: "Policy Compliance and Anomaly Chat",
    roleId: "cfo-finance-leader",
    featureId: "chats",
    shortDescription:
      "Lets the CFO inspect policy exceptions such as admin-hour cap violations, unusual expenses, and missing approvals tied to time or expense activity.",
    businessProblem:
      "Control issues and anomalies are easy to miss until they become bigger finance or audit problems, especially when they require combing through raw transactions.",
    examplePrompt:
      "Who exceeded admin time limits this month, which expenses look out of policy or unusual, and show me missing approvals tied to time or expense activity.",
    workflow: [
      "Ask Wyatt for the current policy and approval exceptions.",
      "Review the people, projects, and transactions behind the anomalies.",
      "Use the result to tighten controls and direct controller or finance ops follow-up."
    ],
    frequency: "Weekly",
    difficulty: "Moderate",
    valueLevel: "High",
    measurableOutcome:
      "Reduces manual anomaly review and improves speed of policy exception detection.",
    businessValue:
      "Helps finance leadership tighten controls without combing through raw operational detail.",
    tags: ["policy", "anomalies", "controls"]
  }),
  useCase({
    id: "cfo-executive-financial-package-roundup",
    title: "Executive Financial Package",
    roleId: "cfo-finance-leader",
    featureId: "roundups",
    shortDescription:
      "A monthly finance leadership package for revenue, EBITDA, cash, AR, WIP, backlog, utilization, margin, and top variance drivers.",
    businessProblem:
      "The monthly executive package is high-value but still too manual in many firms, especially when multiple breakouts and GL narratives are required.",
    examplePrompt:
      "Build the monthly executive financial package with revenue, EBITDA, cash, AR, WIP, backlog, utilization, margin, actual versus budget versus forecast, and top GL movements by office, discipline, and market.",
    workflow: [
      "Aggregate financial KPIs, variance drivers, and GL movement.",
      "Build the consolidated view plus office, discipline, and market breakouts.",
      "Publish a finance leadership-ready package after close."
    ],
    frequency: "Monthly refresh, monthly build after close",
    difficulty: "Moderate",
    valueLevel: "Strategic",
    measurableOutcome:
      "Cuts manual executive-package assembly and improves consistency across month-end reporting.",
    businessValue:
      "Gives the CFO and finance leadership a cleaner monthly operating package with less manual prep.",
    tags: ["executive-package", "close", "financials"]
  }),
  useCase({
    id: "cfo-project-profitability-watchlist-roundup",
    title: "Project Profitability Watchlist",
    roleId: "cfo-finance-leader",
    featureId: "roundups",
    shortDescription:
      "A weekly watchlist of projects below target margin or showing deterioration, write-downs, and burn-rate exceptions.",
    businessProblem:
      "Profit leakage is often visible in project patterns before it is clear in the income statement, but CFOs need that view surfaced consistently.",
    examplePrompt:
      "Build a weekly project profitability watchlist showing projects below target margin, the largest month-over-month margin deterioration, and write-down or burn-rate exceptions.",
    workflow: [
      "Scan the project portfolio for margin deterioration and exception patterns.",
      "Highlight the projects below target profitability.",
      "Summarize what needs CFO attention this week."
    ],
    frequency: "Weekly refresh",
    difficulty: "Easy",
    valueLevel: "High",
    measurableOutcome:
      "Improves early identification of profit leakage before it accumulates into larger write-downs.",
    businessValue:
      "Helps the CFO move from reactive project margin review to earlier intervention.",
    tags: ["profitability", "watchlist", "write-downs"]
  }),
  useCase({
    id: "cfo-billing-cash-conversion-roundup",
    title: "Billing and Cash Conversion",
    roleId: "cfo-finance-leader",
    featureId: "roundups",
    shortDescription:
      "A daily billing and collections view showing blocked billing, high-WIP / low-billing projects, AR aging, and owner next steps.",
    businessProblem:
      "Finance needs a live operating view of revenue conversion, but billing and collections blockers are usually spread across PM, accounting, and client workflows.",
    examplePrompt:
      "Build my billing and cash conversion roundup with ready-to-bill versus blocked, high-WIP / low-billing projects, AR aging tied to PMs and project status, and suggested next steps by owner.",
    workflow: [
      "Refresh billing, WIP, and AR indicators daily.",
      "Highlight blocked items and high-impact cash risks.",
      "Show owner-based next steps for finance, accounting, and PM follow-up."
    ],
    frequency: "Daily during billing and close",
    difficulty: "Easy",
    valueLevel: "High",
    measurableOutcome:
      "Improves daily focus on the issues slowing revenue conversion and cash collection.",
    businessValue:
      "Keeps finance centered on the billing and AR actions with the highest cash impact.",
    tags: ["billing", "cash-conversion", "ar"]
  }),
  useCase({
    id: "cfo-staffing-capacity-forecast-roundup",
    title: "Staffing and Capacity Forecast",
    roleId: "cfo-finance-leader",
    featureId: "roundups",
    shortDescription:
      "A weekly discipline and office-level forecast of demand, capacity gaps, surpluses, and margin pressure from staffing shortages.",
    businessProblem:
      "Finance often feels staffing pressure only after it has already damaged delivery, margin, or utilization performance.",
    examplePrompt:
      "Build a staffing and capacity forecast showing demand by discipline for the next 30 to 180 days, capacity gaps and surpluses by office, the projects driving hiring or reallocation needs, and the margin impact of staffing shortages.",
    workflow: [
      "Forecast labor demand by discipline, office, and time horizon.",
      "Compare it to current staffed capacity.",
      "Highlight the hiring, reallocation, and margin implications."
    ],
    frequency: "Weekly refresh",
    difficulty: "Moderate",
    valueLevel: "High",
    measurableOutcome:
      "Gives finance earlier insight into future staffing constraints and cost implications.",
    businessValue:
      "Connects workforce planning to backlog, utilization, and margin before the financial damage is visible.",
    tags: ["capacity", "staffing", "margin-impact"]
  }),
  useCase({
    id: "cfo-controls-exceptions-roundup",
    title: "Controls and Exceptions",
    roleId: "cfo-finance-leader",
    featureId: "roundups",
    shortDescription:
      "A weekly control view covering missing approvals, admin-hour cap exceptions, unusual expense patterns, and repeated policy issues.",
    businessProblem:
      "Finance leaders need a compact control dashboard, but exception monitoring often requires too much manual inspection.",
    examplePrompt:
      "Build a controls and exceptions roundup showing missing approvals, admin-hour cap exceptions, unusual expense patterns, and repeated policy exceptions by team or manager.",
    workflow: [
      "Pull approval, time, and expense exceptions into one control view.",
      "Group repeated issues by team, manager, and pattern.",
      "Summarize where finance should review, coach, or escalate."
    ],
    frequency: "Weekly refresh",
    difficulty: "Moderate",
    valueLevel: "High",
    measurableOutcome:
      "Improves visibility into finance and policy exceptions without manual audit-style review.",
    businessValue:
      "Helps the CFO tighten controls while keeping attention on the highest-risk exception patterns.",
    tags: ["controls", "policy", "exceptions"]
  }),
  useCase({
    id: "cfo-board-financial-snapshot-roundup",
    title: "Board Financial Snapshot",
    roleId: "cfo-finance-leader",
    featureId: "roundups",
    shortDescription:
      "A board-facing monthly financial snapshot with topline metrics, what changed, key risks, and profitability and cash trend charts.",
    businessProblem:
      "Board materials require a more concise and narrative-ready presentation than internal finance reporting, but still draw from the same financial truth.",
    examplePrompt:
      "Build a board financial snapshot with headline revenue, EBITDA, cash, backlog, utilization, what changed this month, top financial risks and mitigations, a portfolio profitability chart, and a cash plus AR trend chart.",
    workflow: [
      "Summarize the top-level financial picture for the board.",
      "Highlight the key changes, risks, and mitigations.",
      "Generate the charts and narrative needed for executive review."
    ],
    frequency: "Monthly build",
    difficulty: "Moderate",
    valueLevel: "Strategic",
    measurableOutcome:
      "Reduces the effort of turning internal reporting into a board-level financial narrative.",
    businessValue:
      "Gives finance leadership a cleaner bridge from internal reporting to board-ready storytelling.",
    tags: ["board", "snapshot", "executive"]
  }),
  useCase({
    id: "cfo-close-variance-chore",
    title: "Month-End Variance Review Chore",
    roleId: "cfo-finance-leader",
    featureId: "chores",
    shortDescription:
      "Runs a repeatable post-close review of actual vs budget vs forecast across financial and operational drivers.",
    businessProblem:
      "Close reviews consume finance capacity when teams have to gather variance drivers manually before they can discuss what matters.",
    examplePrompt:
      "After close, compare actuals to budget and forecast, highlight the largest favorable and unfavorable drivers, and assign owner follow-up items.",
    workflow: [
      "Trigger after close or on a scheduled date.",
      "Compare actuals to plan across revenue, labor, overhead, cash, AR, and utilization.",
      "Publish a leadership-ready variance pack with owner-based follow-ups."
    ],
    frequency: "Monthly",
    difficulty: "Moderate",
    valueLevel: "Strategic",
    measurableOutcome:
      "Shortens close review prep by one to two days for the finance team.",
    businessValue:
      "Turns close from a data assembly exercise into a decision meeting.",
    tags: ["close", "forecast", "variance"]
  }),
  useCase({
    id: "cfo-project-profitability-watchlist-chore",
    title: "Project Profitability Watchlist",
    roleId: "cfo-finance-leader",
    featureId: "chores",
    shortDescription:
      "Runs a weekly review of margin deterioration, write-down risk, and burn acceleration across the project portfolio.",
    businessProblem:
      "CFOs need a recurring habit for catching profit leakage early, but portfolio review often depends on someone manually assembling the watchlist first.",
    examplePrompt:
      "Each week, flag project margin deterioration, write-down risk, and burn acceleration that need CFO attention.",
    workflow: [
      "Review the project portfolio for margin deterioration patterns.",
      "Highlight write-down and burn-rate risk.",
      "Publish a weekly CFO watchlist."
    ],
    frequency: "Weekly",
    difficulty: "Easy",
    valueLevel: "High",
    measurableOutcome:
      "Improves consistency of weekly profitability review and reduces reliance on ad hoc analysis.",
    businessValue:
      "Creates a repeatable finance rhythm for catching project profit leakage earlier.",
    tags: ["profitability", "weekly-review", "burn-rate"]
  }),
  useCase({
    id: "cfo-billing-readiness-chore",
    title: "Billing Readiness Check",
    roleId: "cfo-finance-leader",
    featureId: "chores",
    shortDescription:
      "Checks blocked billing, missing approvals, and incomplete PM steps during mid-period and close.",
    businessProblem:
      "Revenue conversion slows when blocked billing is only reviewed reactively or too late in the cycle.",
    examplePrompt:
      "During mid-period and close, identify blocked billing, missing approvals, and incomplete PM steps that are slowing invoice release.",
    workflow: [
      "Scan billing readiness across active projects.",
      "Group blocked items by issue type and owner.",
      "Route the resulting action list to finance, accounting, or PMs."
    ],
    frequency: "Mid-period and close",
    difficulty: "Easy",
    valueLevel: "High",
    measurableOutcome:
      "Improves finance visibility into billing blockers before they delay revenue conversion further.",
    businessValue:
      "Helps the CFO focus on the process issues slowing invoice release and cash timing.",
    tags: ["billing", "close", "approvals"]
  }),
  useCase({
    id: "cfo-ar-cash-watchlist-chore",
    title: "AR and Cash Risk Watchlist",
    roleId: "cfo-finance-leader",
    featureId: "chores",
    shortDescription:
      "Runs a weekly collections-oriented review of overdue balances, large exposures, and cash priorities.",
    businessProblem:
      "Collections risk is easy to acknowledge and hard to prioritize unless finance has a recurring operating list tied to size and urgency.",
    examplePrompt:
      "Each week, rank overdue balances by size and aging, highlight the largest exposures, and suggest the top collection priorities.",
    workflow: [
      "Review AR aging and overdue balances.",
      "Rank the highest cash-impact exposures.",
      "Publish finance and project follow-up priorities."
    ],
    frequency: "Weekly",
    difficulty: "Easy",
    valueLevel: "High",
    measurableOutcome:
      "Improves collection focus by consistently surfacing the balances with the biggest cash impact.",
    businessValue:
      "Turns AR review into a practical cash-priority workflow rather than a static aging report.",
    tags: ["ar", "cash", "watchlist"]
  }),
  useCase({
    id: "cfo-gl-anomaly-review-chore",
    title: "GL Anomaly Review",
    roleId: "cfo-finance-leader",
    featureId: "chores",
    shortDescription:
      "Runs a weekly anomaly check on unusual account movement, transaction spikes, and likely causes.",
    businessProblem:
      "GL anomalies often get reviewed late because no one is proactively surfacing unusual account movement each week.",
    examplePrompt:
      "Each week, identify unusual account movements, transaction spikes, and the most likely causes that finance should review.",
    workflow: [
      "Scan GL activity for unusual movement patterns.",
      "Highlight the accounts and transactions behind the spikes.",
      "Return a concise list for finance review."
    ],
    frequency: "Weekly",
    difficulty: "Moderate",
    valueLevel: "High",
    measurableOutcome:
      "Improves the speed and consistency of GL anomaly review between closes.",
    businessValue:
      "Gives finance a structured weekly habit for catching unusual account movement earlier.",
    tags: ["gl", "anomalies", "weekly"]
  }),
  useCase({
    id: "cfo-staffing-demand-alert-chore",
    title: "Staffing Demand Alert",
    roleId: "cfo-finance-leader",
    featureId: "chores",
    shortDescription:
      "Runs a weekly alert on discipline gaps, backlog pressure, and the financial impact of staffing shortages.",
    businessProblem:
      "Finance needs recurring visibility into staffing pressure before it appears as lower margin, missed revenue, or under-delivery.",
    examplePrompt:
      "Each week, flag discipline staffing gaps, backlog pressure, and the likely margin impact of staffing shortages.",
    workflow: [
      "Review demand versus capacity by discipline and office.",
      "Highlight the largest near-term staffing pressures.",
      "Summarize the likely financial impact and follow-up."
    ],
    frequency: "Weekly",
    difficulty: "Moderate",
    valueLevel: "High",
    measurableOutcome:
      "Improves early visibility into the financial implications of staffing shortages.",
    businessValue:
      "Helps the CFO connect labor demand alerts directly to financial planning and delivery risk.",
    tags: ["staffing", "alert", "margin-impact"]
  }),
  useCase({
    id: "cfo-policy-exception-sweep-chore",
    title: "Policy Exception Sweep",
    roleId: "cfo-finance-leader",
    featureId: "chores",
    shortDescription:
      "Runs a weekly review of admin caps, expense anomalies, missing comments, and late approvals.",
    businessProblem:
      "Control exceptions spread quietly unless finance has a standing workflow for monitoring them at the right level of detail.",
    examplePrompt:
      "Each week, review admin caps, expense anomalies, missing comments, and late approvals that need finance attention.",
    workflow: [
      "Inspect time, expense, and approval activity for policy issues.",
      "Group the exceptions by severity and pattern.",
      "Publish a weekly finance control review list."
    ],
    frequency: "Weekly",
    difficulty: "Moderate",
    valueLevel: "High",
    measurableOutcome:
      "Improves visibility into policy exceptions and reduces manual control review effort.",
    businessValue:
      "Keeps control issues visible without requiring line-by-line review from finance leadership.",
    tags: ["policy", "exceptions", "controls"]
  }),
  useCase({
    id: "cfo-executive-pre-meeting-brief-chore",
    title: "Executive Pre-Meeting Brief",
    roleId: "cfo-finance-leader",
    featureId: "chores",
    shortDescription:
      "Prepares a monthly finance brief with top decisions, risks, and talking points before executive meetings.",
    businessProblem:
      "Finance leaders often know the numbers but still need a concise operating narrative before executive and board discussions.",
    examplePrompt:
      "Before the monthly executive meeting, prepare a brief with the top financial decisions, risks, and talking points I should bring into the room.",
    workflow: [
      "Review the latest financial and operational signals.",
      "Summarize what changed and what decisions matter most.",
      "Package a concise monthly finance talking-points brief."
    ],
    frequency: "Monthly",
    difficulty: "Easy",
    valueLevel: "Strategic",
    measurableOutcome:
      "Reduces prep time for executive financial discussions and improves consistency in finance messaging.",
    businessValue:
      "Turns finance review into a stronger executive communication workflow, not just a report handoff.",
    tags: ["executive", "brief", "talking-points"]
  }),
  useCase({
    id: "controller-invoice-exception-chore",
    title: "Invoice Exception Review Chore",
    roleId: "controller",
    featureId: "chores",
    shortDescription:
      "Creates a daily queue of invoice anomalies, missing steps, and project accounting exceptions that need attention.",
    businessProblem:
      "Controllers spend too much time hunting down why invoices are not ready or where accounting quality broke down.",
    examplePrompt:
      "Identify invoices blocked by missing approvals, draft status, missing time, or project accounting exceptions and assign the next owner.",
    workflow: [
      "Scan current billing and project accounting status.",
      "Group issues by blocker and owner.",
      "Publish a clear resolution queue for accounting and PMs."
    ],
    frequency: "Daily",
    difficulty: "Easy",
    valueLevel: "High",
    measurableOutcome:
      "Reduces invoice cleanup cycles and shortens the number of touches needed to get work billed.",
    businessValue:
      "Improves billing throughput and reduces controller follow-up effort.",
    tags: ["billing", "exceptions", "workflow"]
  }),
  useCase({
    id: "controller-ar-and-close-roundup",
    title: "AR and Close Readiness Roundup",
    roleId: "controller",
    featureId: "roundups",
    shortDescription:
      "Provides a controller-focused view of overdue AR, billing readiness, open accounting exceptions, and close blockers.",
    businessProblem:
      "Controllers need one operating board for the items that threaten clean close and cash collection.",
    examplePrompt:
      "Show overdue AR, blocked billing, open project accounting exceptions, and close blockers by owner and office.",
    workflow: [
      "Pull AR, billing status, and accounting exception data.",
      "Rank the items by amount, urgency, and aging.",
      "Present the next actions needed to move them."
    ],
    frequency: "Daily during close",
    difficulty: "Easy",
    valueLevel: "High",
    measurableOutcome:
      "Makes daily close huddles shorter and more action-oriented.",
    businessValue:
      "Keeps the controller focused on the biggest blockers instead of scattered status checking.",
    tags: ["ar", "close", "cash"]
  }),
  useCase({
    id: "controller-gl-anomaly-chat",
    title: "GL Anomaly Chat",
    roleId: "controller",
    featureId: "chats",
    shortDescription:
      "Lets the controller ask targeted GL and transaction questions without building custom reports first.",
    businessProblem:
      "Controllers regularly need to understand account movement quickly but still require transaction-level detail and context.",
    examplePrompt:
      "Why did account 6100 move so much in March, and what transactions or projects drove it?",
    workflow: [
      "Ask the GL question in natural language.",
      "Review the transaction list and source breakdown Wyatt returns.",
      "Decide whether the movement is expected, needs correction, or needs escalation."
    ],
    frequency: "Several times per week",
    difficulty: "Moderate",
    valueLevel: "High",
    measurableOutcome:
      "Cuts GL research time from hours to minutes while preserving drill-down detail.",
    businessValue:
      "Improves finance responsiveness without sacrificing accounting rigor.",
    tags: ["gl", "transactions", "audit"]
  }),
  useCase({
    id: "controller-billing-cash-conversion-roundup",
    title: "Billing and Cash Conversion",
    roleId: "controller",
    featureId: "roundups",
    shortDescription:
      "A controller-facing billing and collections view showing blocked billing, high-WIP / low-billing projects, AR aging, and owner next steps.",
    businessProblem:
      "Controllers need the same cash-conversion view as the CFO, but with more operational focus on what accounting and PMs need to clear next.",
    examplePrompt:
      "Build a billing and cash conversion roundup showing ready-to-bill versus blocked, high-WIP / low-billing projects, AR aging by PM and project status, and suggested next actions by owner.",
    workflow: [
      "Refresh billing and AR indicators daily.",
      "Identify blocked billing and slow-conversion patterns.",
      "Return the next actions needed by accounting and PMs."
    ],
    frequency: "Daily during billing and close",
    difficulty: "Easy",
    valueLevel: "High",
    measurableOutcome:
      "Improves controller visibility into the exact billing and AR issues slowing revenue conversion.",
    businessValue:
      "Makes billing and collections management more operational and less fragmented for the controller.",
    tags: ["billing", "cash-conversion", "controller"]
  }),
  useCase({
    id: "controller-controls-exceptions-roundup",
    title: "Controls and Exceptions",
    roleId: "controller",
    featureId: "roundups",
    shortDescription:
      "A controller view of missing approvals, admin-hour cap exceptions, expense anomalies, and repeated policy issues.",
    businessProblem:
      "Controllers often sit at the point where accounting control issues become operational cleanup work, but the exception patterns are not always visible in one place.",
    examplePrompt:
      "Build a controls and exceptions roundup showing missing approvals, admin-hour cap exceptions, unusual expense patterns, and repeated policy exceptions by team or manager.",
    workflow: [
      "Aggregate approval, time, and expense issues into one view.",
      "Group repeated problems by manager, team, and pattern.",
      "Surface the items needing controller follow-up."
    ],
    frequency: "Weekly refresh",
    difficulty: "Moderate",
    valueLevel: "High",
    measurableOutcome:
      "Improves controller visibility into policy and process exceptions before they become bigger accounting problems.",
    businessValue:
      "Helps the controller monitor control issues in a practical, repeatable way.",
    tags: ["controls", "policy", "controller"]
  }),
  useCase({
    id: "controller-policy-exception-sweep-chore",
    title: "Policy Exception Sweep",
    roleId: "controller",
    featureId: "chores",
    shortDescription:
      "Runs a weekly review of admin caps, expense anomalies, missing comments, and late approvals for controller follow-up.",
    businessProblem:
      "Controllers often own the cleanup path on policy and approval issues, but the exceptions are not always surfaced consistently.",
    examplePrompt:
      "Each week, review admin caps, expense anomalies, missing comments, and late approvals and group the issues that need controller follow-up.",
    workflow: [
      "Inspect time, expense, and approval activity for policy exceptions.",
      "Group the issues by pattern and severity.",
      "Publish the controller's weekly exception review list."
    ],
    frequency: "Weekly",
    difficulty: "Moderate",
    valueLevel: "High",
    measurableOutcome:
      "Improves consistency of controller follow-up on policy and approval exceptions.",
    businessValue:
      "Turns exception review into a practical controller workflow instead of ad hoc cleanup.",
    tags: ["policy", "exceptions", "controller"]
  }),
  useCase({
    id: "pm-project-health-chat",
    title: "Project Health Chat",
    roleId: "project-manager",
    featureId: "chats",
    shortDescription:
      "Gives PMs a fast way to ask about fee burn, schedule risk, staffing gaps, and next actions on a live project.",
    businessProblem:
      "PMs often know something feels off before they can prove it, but pulling the right data takes too long.",
    examplePrompt:
      "What is the health of Project Redwood right now, and what changed in budget, staffing, schedule, and billing since last week?",
    workflow: [
      "Start with a project name or project list.",
      "Ask Wyatt for health, changes, and priorities.",
      "Use the answer to guide your standup, client call, or internal follow-up."
    ],
    frequency: "Daily",
    difficulty: "Easy",
    valueLevel: "High",
    measurableOutcome:
      "Gives PMs same-day situational awareness without report-building lag.",
    businessValue:
      "Helps PMs intervene earlier and spend less time triangulating status.",
    tags: ["project", "health", "delivery"]
  }),
  useCase({
    id: "pm-margin-burn-chat",
    title: "Margin, WIP, and Burn Investigation",
    roleId: "project-manager",
    featureId: "chats",
    shortDescription:
      "Lets PMs ask focused profitability questions about margin drop, write-offs, burn rate, and projects trending over budget.",
    businessProblem:
      "PMs need exact project financial answers quickly, but margin and burn issues are often buried in multiple reports and spreadsheets.",
    examplePrompt:
      "Which of my projects have the biggest margin drop this month, what are the top drivers of write-offs on Project X, and which jobs are trending over budget based on burn rate versus plan?",
    workflow: [
      "Start with a portfolio or project-level profitability question.",
      "Review the margin, WIP, write-off, and burn-rate drivers Wyatt returns.",
      "Use the answer to decide where intervention is needed this week."
    ],
    frequency: "Several times per week",
    difficulty: "Easy",
    valueLevel: "High",
    measurableOutcome:
      "Cuts project profitability analysis from hours of report pulling to a few minutes of guided review.",
    businessValue:
      "Gives PMs fewer clicks, less spreadsheet work, and faster interventions when projects start slipping.",
    tags: ["margin", "wip", "burn-rate"]
  }),
  useCase({
    id: "pm-billing-bottleneck-chat",
    title: "Billing Bottleneck Chat",
    roleId: "project-manager",
    featureId: "chats",
    shortDescription:
      "Answers the day-to-day billing status questions PMs struggle with during mid-period and close.",
    businessProblem:
      "PMs often know billing is delayed but do not know exactly what is stuck, who owns the next step, or which review is missing.",
    examplePrompt:
      "What is holding up billing this period for my projects, which invoices are stuck in draft or pending review, and which PMs have not completed bill review yet?",
    workflow: [
      "Ask Wyatt for blocked billing items across your active jobs.",
      "Review the reason each invoice is stalled and the current owner.",
      "Use the result to clear PM review and accounting handoff bottlenecks faster."
    ],
    frequency: "Daily during billing cycles",
    difficulty: "Easy",
    valueLevel: "High",
    measurableOutcome:
      "Reduces PM time spent hunting billing status and shortens invoice-release delays caused by unclear ownership.",
    businessValue:
      "Solves a common PM pain point around bill review and billing readiness with direct answers instead of status chasing.",
    tags: ["billing", "bottlenecks", "bill-review"]
  }),
  useCase({
    id: "pm-timesheet-labor-chat",
    title: "Timesheet and Labor Cost Control Chat",
    roleId: "project-manager",
    featureId: "chats",
    shortDescription:
      "Helps PMs identify missing time, wrong labor code usage, and overtime spikes on their projects.",
    businessProblem:
      "Time entry and labor-code issues quietly distort project financials until someone takes time to inspect them closely.",
    examplePrompt:
      "Who on my projects has missing timesheets, what teams are charging the wrong labor codes, and where did we spike overtime last week and on which tasks?",
    workflow: [
      "Ask Wyatt for time-entry and labor-cost exceptions on your projects.",
      "Review the people, tasks, and codes driving the issues.",
      "Use the answer to correct bad charging behavior before it distorts billing and margin."
    ],
    frequency: "Several times per week",
    difficulty: "Easy",
    valueLevel: "High",
    measurableOutcome:
      "Finds labor-code and time-entry issues earlier, reducing cleanup and improving project cost accuracy.",
    businessValue:
      "Gives PMs a practical way to control labor leakage without manual timesheet review.",
    tags: ["timesheets", "labor-codes", "overtime"]
  }),
  useCase({
    id: "pm-capacity-planning-chat",
    title: "Staffing and Capacity Planning Chat",
    roleId: "project-manager",
    featureId: "chats",
    shortDescription:
      "Answers staffing questions about upcoming roles, underutilized matches, and projects at risk because of delivery gaps.",
    businessProblem:
      "PMs usually know they need people soon, but it takes too long to translate project plans into specific staffing actions.",
    examplePrompt:
      "What roles do I need in the next four weeks based on project plans, who is underutilized but has the right skills for Project Y, and which projects are at risk due to staffing gaps?",
    workflow: [
      "Ask Wyatt for a staffing view tied to project plans and schedules.",
      "Review the needed roles, likely candidate matches, and at-risk jobs.",
      "Use the answer to coordinate with operations or the resource manager."
    ],
    frequency: "Weekly",
    difficulty: "Moderate",
    valueLevel: "High",
    measurableOutcome:
      "Improves staffing lead time and reduces avoidable schedule slips caused by late resourcing.",
    businessValue:
      "Makes project staffing discussions more actionable and less dependent on manual coordination.",
    tags: ["staffing", "capacity", "resourcing"]
  }),
  useCase({
    id: "pm-portfolio-overview-roundup",
    title: "PM Portfolio Overview",
    roleId: "project-manager",
    featureId: "roundups",
    shortDescription:
      "A roundup across all PM-owned projects showing health, billing blockers, unapproved time, AR exposure, and upcoming milestones.",
    businessProblem:
      "PMs need one place to monitor the handful of projects and exceptions that need attention now, not separate reports for each topic.",
    examplePrompt:
      "Build my PM portfolio overview with at-risk projects, unapproved time, AR exposure where allowed, upcoming milestones, and the top exceptions to investigate.",
    workflow: [
      "Refresh KPIs across all PM-owned projects.",
      "Highlight margin drop, burn acceleration, billing blockers, and milestone risk.",
      "Show trend charts for burn and forecast versus plan."
    ],
    frequency: "Daily refresh, weekly build",
    difficulty: "Easy",
    valueLevel: "High",
    measurableOutcome:
      "Gives PMs a single operating board for their project portfolio instead of a scattered set of project checks.",
    businessValue:
      "Improves daily portfolio awareness and helps PMs focus on the few issues that actually need intervention.",
    tags: ["portfolio", "exceptions", "milestones"]
  }),
  useCase({
    id: "pm-single-project-health-roundup",
    title: "Project Health Roundup",
    roleId: "project-manager",
    featureId: "roundups",
    shortDescription:
      "A single-project view combining scope, schedule, budget, changes, and a written risk summary for the delivery team.",
    businessProblem:
      "When a project is in a critical phase, PMs need a refreshable project room that combines status, changes, and next decisions.",
    examplePrompt:
      "Build a single-project health roundup with scope, schedule, and budget snapshot, key changes since last refresh, risks, issues, and decisions needed.",
    workflow: [
      "Refresh the project's schedule, budget, and recent changes.",
      "Summarize the biggest issues and decisions needed in writing.",
      "Link out to supporting detail tables for deeper follow-up."
    ],
    frequency: "Daily during critical phases",
    difficulty: "Easy",
    valueLevel: "High",
    measurableOutcome:
      "Cuts time spent preparing project status meetings and keeps the team aligned on the same facts.",
    businessValue:
      "Turns project review into a live operating view instead of a manually assembled update.",
    tags: ["single-project", "status", "risks"]
  }),
  useCase({
    id: "pm-billing-readiness-roundup",
    title: "Billing Readiness Roundup",
    roleId: "project-manager",
    featureId: "roundups",
    shortDescription:
      "Shows which PM-owned invoices are ready, blocked, or waiting on specific review steps.",
    businessProblem:
      "Billing periods create PM frustration when the team does not know what is blocked, who owns it, or what step is missing.",
    examplePrompt:
      "Build my billing readiness view with ready-to-bill projects, blocked invoices, and the exact next action by owner.",
    workflow: [
      "Refresh billing status across the PM's active projects.",
      "Group the blockers by missing review, missing time, approval, or project accounting issue.",
      "List the next action and owner for each blocked item."
    ],
    frequency: "Daily during billing cycles",
    difficulty: "Easy",
    valueLevel: "High",
    measurableOutcome:
      "Reduces PM bill-review churn and shortens time to invoice release.",
    businessValue:
      "Keeps billing from stalling because the PM lacks clean visibility into blockers.",
    tags: ["billing", "pm-review", "close"]
  }),
  useCase({
    id: "pm-staffing-capacity-roundup",
    title: "Staffing and Capacity Lookahead",
    roleId: "project-manager",
    featureId: "roundups",
    shortDescription:
      "A weekly staffing view showing upcoming demand by role, overbooked and underutilized resources, and likely reallocation options.",
    businessProblem:
      "PMs can see the project work coming, but they often cannot see future staffing conflicts clearly enough to act early.",
    examplePrompt:
      "Build a staffing and capacity lookahead for the next two to eight weeks showing role demand, overbooked and underutilized resources, and recommended reallocations.",
    workflow: [
      "Forecast upcoming demand by discipline and role.",
      "Compare the work to available and overbooked staff.",
      "List conflicts and likely reallocation options."
    ],
    frequency: "Weekly refresh",
    difficulty: "Moderate",
    valueLevel: "High",
    measurableOutcome:
      "Improves staffing planning and reduces reactive scrambling before project phases begin.",
    businessValue:
      "Gives PMs a clean bridge between the project plan and the resourcing conversation.",
    tags: ["staffing", "lookahead", "conflicts"]
  }),
  useCase({
    id: "pm-client-progress-roundup",
    title: "Weekly Project Progress One-Pager",
    roleId: "project-manager",
    featureId: "roundups",
    shortDescription:
      "A client-facing weekly progress roundup with status, accomplishments, next steps, risks, and a simple progress chart.",
    businessProblem:
      "PMs spend too much time turning internal project information into a client-ready weekly update.",
    examplePrompt:
      "Create a weekly client project progress one-pager with on-track or at-risk status, a short narrative, completed work, planned work, risks and mitigations, and a project progress chart.",
    workflow: [
      "Pull the week's completed work, upcoming work, and key issues.",
      "Generate a concise narrative plus client-ready bullets.",
      "Publish a one-pager that can be refreshed weekly or exported as a PDF."
    ],
    frequency: "Weekly refresh",
    difficulty: "Moderate",
    valueLevel: "Core",
    measurableOutcome:
      "Reduces effort required to produce consistent client progress updates each week.",
    businessValue:
      "Makes client communication more repeatable and less dependent on manual reformatting.",
    tags: ["client-facing", "weekly-update", "progress"]
  }),
  useCase({
    id: "pm-weekly-health-pack-chore",
    title: "Weekly Project Health Pack",
    roleId: "project-manager",
    featureId: "chores",
    shortDescription:
      "Runs every week to package burn versus budget, margin trend, and the key anomalies the PM should review first.",
    businessProblem:
      "Project health reviews lose value when PMs walk into Monday without a clean picture of what changed over the weekend or late last week.",
    examplePrompt:
      "Every Monday at 7am, deliver a project health pack with burn versus budget, margin trend, and the key anomalies I should investigate first.",
    workflow: [
      "Check burn, budget, margin, and change signals across active projects.",
      "Rank the biggest anomalies and shifts.",
      "Deliver a Monday review pack for the PM."
    ],
    frequency: "Weekly",
    difficulty: "Easy",
    valueLevel: "High",
    measurableOutcome:
      "Improves PM readiness at the start of the week and reduces time spent assembling a status picture.",
    businessValue:
      "Turns project review into a repeatable management habit instead of a manual exercise.",
    tags: ["monday-pack", "burn", "margin"]
  }),
  useCase({
    id: "pm-billing-readiness-chore",
    title: "Billing Readiness Check",
    roleId: "project-manager",
    featureId: "chores",
    shortDescription:
      "Runs during mid-period and close to identify what is blocking billing and who owns the next step.",
    businessProblem:
      "PMs frequently know billing is late but do not have a consistent process for surfacing blockers and owners before close pressure builds.",
    examplePrompt:
      "During mid-period and close, identify what is blocking billing on my projects and assign the next step to the right owner.",
    workflow: [
      "Scan billing workflow states and blockers.",
      "Group blocked items by cause and owner.",
      "Send the PM a clean next-step list."
    ],
    frequency: "Mid-period and close",
    difficulty: "Easy",
    valueLevel: "High",
    measurableOutcome:
      "Shortens the time from issue discovery to billing action during the most time-sensitive part of the cycle.",
    businessValue:
      "Helps PMs keep invoice flow moving without manually checking each blocking condition.",
    tags: ["billing", "close", "workflow"]
  }),
  useCase({
    id: "pm-bill-review-nudges-chore",
    title: "Bill Review Nudges",
    roleId: "project-manager",
    featureId: "chores",
    shortDescription:
      "Sends reminders for projects not yet reviewed for billing, with the reviewer and impacted period clearly identified.",
    businessProblem:
      "Bill review gets delayed when no one has a lightweight nudge system showing exactly what still needs PM action.",
    examplePrompt:
      "During close, remind me which projects have not completed bill review, who the reviewer is, and which billing period is affected.",
    workflow: [
      "Check which projects still need PM bill review.",
      "Identify the reviewer and the impacted period.",
      "Send targeted reminders until the review is completed."
    ],
    frequency: "During close",
    difficulty: "Easy",
    valueLevel: "Core",
    measurableOutcome:
      "Reduces missed or late bill reviews and cuts avoidable billing delays.",
    businessValue:
      "Keeps PM review from becoming the hidden blocker in the billing cycle.",
    tags: ["bill-review", "nudges", "close"]
  }),
  useCase({
    id: "pm-timesheet-compliance-chore",
    title: "Timesheet Compliance Check",
    roleId: "project-manager",
    featureId: "chores",
    shortDescription:
      "Runs daily to highlight missing time by person and the projects affected.",
    businessProblem:
      "Missing time quietly creates billing and reporting problems, but PMs usually find out too late to fix it cleanly.",
    examplePrompt:
      "Every day, identify missing time by person and the impacted projects so I can follow up before it affects billing.",
    workflow: [
      "Scan time-entry completion for project contributors.",
      "Group missing entries by person and project.",
      "Return a daily follow-up list for the PM."
    ],
    frequency: "Daily",
    difficulty: "Easy",
    valueLevel: "High",
    measurableOutcome:
      "Improves time-entry compliance and reduces project-level cleanup near billing deadlines.",
    businessValue:
      "Gives PMs a simple daily workflow for preventing avoidable time-entry issues.",
    tags: ["timesheets", "compliance", "daily"]
  }),
  useCase({
    id: "pm-ar-risk-watchlist-chore",
    title: "AR Risk Watchlist",
    roleId: "project-manager",
    featureId: "chores",
    shortDescription:
      "Creates a weekly watchlist of overdue invoices tied to PM-owned projects with aging and suggested next steps.",
    businessProblem:
      "PMs often hear about AR risk late, even though they may be the best person to unblock the client conversation or project issue causing it.",
    examplePrompt:
      "Each week, show overdue invoices tied to my projects, the aging, and the suggested next steps I should take with accounting or the client team.",
    workflow: [
      "Pull overdue AR associated with the PM's projects.",
      "Rank the invoices by age and size.",
      "Return the likely next action for each item."
    ],
    frequency: "Weekly",
    difficulty: "Moderate",
    valueLevel: "High",
    measurableOutcome:
      "Improves PM awareness of collection risk and helps surface project issues affecting cash flow sooner.",
    businessValue:
      "Connects PM behavior and client follow-up to cash collection outcomes.",
    tags: ["ar", "cash", "collections"]
  }),
  useCase({
    id: "pm-scope-creep-detector-chore",
    title: "Scope Creep Detector",
    roleId: "project-manager",
    featureId: "chores",
    shortDescription:
      "Monitors labor mix shifts, spend acceleration, and low remaining budget so PMs can catch emerging scope issues early.",
    businessProblem:
      "Scope creep usually appears first as pattern changes in labor, spend, or remaining fee, but PMs rarely get those signals in time.",
    examplePrompt:
      "Each week, detect labor mix shifts, spend acceleration, and low remaining budget that suggest scope creep on my projects.",
    workflow: [
      "Compare labor mix and spend patterns to expected project behavior.",
      "Highlight low remaining budget and unusual acceleration.",
      "Return a watchlist of projects likely experiencing scope creep."
    ],
    frequency: "Weekly",
    difficulty: "Moderate",
    valueLevel: "High",
    measurableOutcome:
      "Finds scope and fee erosion signals earlier, before they become write-offs or client escalations.",
    businessValue:
      "Helps PMs protect budget and margin with earlier warning signs.",
    tags: ["scope-creep", "budget", "fee"]
  }),
  useCase({
    id: "pm-staffing-gap-chore",
    title: "Staffing Gap Alert",
    roleId: "project-manager",
    featureId: "chores",
    shortDescription:
      "Runs a recurring check for short-term staffing risk based on the project plan, active assignments, and deadlines.",
    businessProblem:
      "PMs often discover staffing problems too late, after deadlines or fee burn are already affected.",
    examplePrompt:
      "Every Friday, flag the roles I need in the next four weeks, identify gaps, and suggest people or teams who may be available.",
    workflow: [
      "Review planned work against assigned capacity.",
      "Highlight upcoming discipline or role gaps.",
      "Notify the PM and resource owner with recommended next actions."
    ],
    frequency: "Weekly",
    difficulty: "Moderate",
    valueLevel: "High",
    measurableOutcome:
      "Finds staffing issues one to three weeks earlier than ad hoc project reviews.",
    businessValue:
      "Protects schedule and fee by making resourcing problems visible sooner.",
    tags: ["staffing", "resource", "risk"]
  }),
  useCase({
    id: "pm-exceptions-inbox-chore",
    title: "Exceptions Inbox",
    roleId: "project-manager",
    featureId: "chores",
    shortDescription:
      "Builds a daily inbox of anomalies, late approvals, and only the exceptions that actually require PM attention.",
    businessProblem:
      "PMs cannot act on every data point, but they do need a disciplined way to see only the anomalies that matter today.",
    examplePrompt:
      "Every day, send me only the anomalies and late approvals that need my attention across my projects.",
    workflow: [
      "Filter project activity down to true exceptions and late approvals.",
      "Rank the items by urgency and likely impact.",
      "Publish a small, actionable daily inbox."
    ],
    frequency: "Daily",
    difficulty: "Easy",
    valueLevel: "Core",
    measurableOutcome:
      "Cuts noise for PMs and improves follow-through on the few issues that need immediate action.",
    businessValue:
      "Makes Wyatt feel like an operating assistant instead of another dashboard to monitor.",
    tags: ["exceptions", "approvals", "daily"]
  }),
  useCase({
    id: "ops-delivery-command-center-roundup",
    title: "Delivery Command Center",
    roleId: "operations-leader",
    featureId: "roundups",
    shortDescription:
      "A multi-office operating view of at-risk projects, staffing pressure, utilization, and delivery bottlenecks.",
    businessProblem:
      "Operations leaders need a cross-firm picture, but delivery signal usually lives in separate project, staffing, and finance views.",
    examplePrompt:
      "Show enterprise delivery risk across projects, staffing gaps, utilization pressure, billing blockers, and schedule exceptions.",
    workflow: [
      "Refresh project, staffing, utilization, and billing indicators.",
      "Rank the issues by urgency and scale.",
      "Surface a firm-level operating summary with drill-down by office and discipline."
    ],
    frequency: "Daily",
    difficulty: "Easy",
    valueLevel: "Strategic",
    measurableOutcome:
      "Cuts time spent assembling operations meetings and improves issue prioritization across offices.",
    businessValue:
      "Lets operations run the business from one practical view instead of disconnected status sources.",
    tags: ["operations", "delivery", "multi-office"]
  }),
  useCase({
    id: "ops-project-profitability-watchlist-roundup",
    title: "Project Profitability Watchlist",
    roleId: "operations-leader",
    featureId: "roundups",
    shortDescription:
      "A weekly operations watchlist of projects below target margin, month-over-month deterioration, and write-down or burn-rate exceptions.",
    businessProblem:
      "Operations needs a practical cross-project view of profitability issues when the root cause is likely in delivery behavior, staffing, or execution.",
    examplePrompt:
      "Build a weekly project profitability watchlist showing projects below target margin, the largest month-over-month margin deterioration, and write-down or burn-rate exceptions.",
    workflow: [
      "Scan the portfolio for project profitability deterioration.",
      "Group the issues by PM, office, and delivery pattern.",
      "Return the watchlist operations should review this week."
    ],
    frequency: "Weekly refresh",
    difficulty: "Moderate",
    valueLevel: "High",
    measurableOutcome:
      "Helps operations identify the delivery-side causes of profit leakage earlier.",
    businessValue:
      "Connects project profitability deterioration to operational intervention instead of leaving it solely in finance review.",
    tags: ["profitability", "operations", "watchlist"]
  }),
  useCase({
    id: "ops-staffing-capacity-forecast-roundup",
    title: "Staffing and Capacity Forecast",
    roleId: "operations-leader",
    featureId: "roundups",
    shortDescription:
      "A weekly operations view of demand by discipline, office-level capacity gaps, and staffing issues affecting delivery and margin.",
    businessProblem:
      "Operations needs the staffing forecast not just to inform hiring, but to manage delivery risk and reallocation before projects slip.",
    examplePrompt:
      "Build a staffing and capacity forecast showing discipline demand, office-level capacity gaps and surpluses, the projects driving hiring or reallocation needs, and the likely delivery impact.",
    workflow: [
      "Forecast demand and compare it to current staffed capacity.",
      "Highlight office and discipline bottlenecks.",
      "Return the projects and teams that need operational action."
    ],
    frequency: "Weekly refresh",
    difficulty: "Moderate",
    valueLevel: "High",
    measurableOutcome:
      "Improves operations visibility into staffing constraints before they become widespread delivery issues.",
    businessValue:
      "Turns staffing forecasting into an operational risk-management tool, not just a finance view.",
    tags: ["staffing", "capacity", "operations"]
  }),
  useCase({
    id: "ops-pm-portfolio-roundup",
    title: "PM Portfolio Overview",
    roleId: "operations-leader",
    featureId: "roundups",
    shortDescription:
      "A cross-PM roundup showing at-risk projects, unapproved time, billing blockers, and upcoming milestones across the delivery organization.",
    businessProblem:
      "Operations leaders need to see which PMs and projects need help now, not just an overall delivery heatmap.",
    examplePrompt:
      "Build a PM portfolio overview across the firm with at-risk projects, unapproved time, billing blockers, AR exposure where allowed, and upcoming milestones.",
    workflow: [
      "Aggregate project, billing, and time-entry signals across PM portfolios.",
      "Highlight the top exceptions to investigate by PM and office.",
      "Show trend charts for burn and forecast versus plan."
    ],
    frequency: "Daily refresh, weekly build",
    difficulty: "Easy",
    valueLevel: "High",
    measurableOutcome:
      "Gives operations a clearer view of where PM coaching or intervention is needed before issues spread.",
    businessValue:
      "Makes portfolio oversight more actionable by showing PM-level exception patterns, not just firm-level totals.",
    tags: ["pm-portfolio", "operations", "exceptions"]
  }),
  useCase({
    id: "ops-billing-bottleneck-chat",
    title: "Billing Bottleneck Portfolio Chat",
    roleId: "operations-leader",
    featureId: "chats",
    shortDescription:
      "Answers operations questions about where billing is stuck, which PMs have not completed review, and what is slowing release across the portfolio.",
    businessProblem:
      "Operations leaders often need to break billing bottlenecks across multiple PMs, but they do not always know where the process is stuck or who owns the next action.",
    examplePrompt:
      "Which invoices are stuck in draft or pending review, what is holding up billing across the portfolio, and which PMs have not completed bill review yet?",
    workflow: [
      "Ask Wyatt for blocked billing patterns across PMs or offices.",
      "Review the blockers, owners, and affected periods.",
      "Use the answer to target operational follow-up and escalation."
    ],
    frequency: "Daily during close",
    difficulty: "Easy",
    valueLevel: "High",
    measurableOutcome:
      "Cuts time spent identifying portfolio-wide billing blockers and speeds intervention where PM review is lagging.",
    businessValue:
      "Gives operations a direct way to clear billing friction across teams instead of waiting for status updates.",
    tags: ["billing", "operations", "pm-review"]
  }),
  useCase({
    id: "ops-timesheet-labor-chat",
    title: "Timesheet and Labor Exception Chat",
    roleId: "operations-leader",
    featureId: "chats",
    shortDescription:
      "Surfaces missing time, wrong labor code usage, and overtime spikes across teams, offices, or project portfolios.",
    businessProblem:
      "Operations can see margin and schedule outcomes, but the labor behavior causing them is often harder to isolate quickly across the business.",
    examplePrompt:
      "Which teams have missing timesheets, where are people charging the wrong labor codes, and where did we spike overtime last week and on which tasks?",
    workflow: [
      "Ask Wyatt for labor exceptions across the selected portfolio.",
      "Review the people, teams, and tasks behind the issues.",
      "Use the answer to direct corrective follow-up with PMs and department leaders."
    ],
    frequency: "Weekly",
    difficulty: "Moderate",
    valueLevel: "High",
    measurableOutcome:
      "Finds operational labor issues earlier and reduces the lag between exception detection and correction.",
    businessValue:
      "Helps operations address the labor patterns that quietly drive delivery and margin problems.",
    tags: ["labor", "timesheets", "portfolio"]
  }),
  useCase({
    id: "ops-system-coverage-integration",
    title: "ERP + CRM + Delivery Integration Map",
    roleId: "operations-leader",
    featureId: "integrations",
    shortDescription:
      "Shows how connected systems feed Wyatt workflows across project delivery, pipeline, staffing, and financial monitoring.",
    businessProblem:
      "Operations leaders need to know whether the right systems are connected so the resulting insights can be trusted and expanded.",
    examplePrompt:
      "Map the systems and data flows Wyatt is using for project operations, forecasting, staffing, and pursuit visibility.",
    workflow: [
      "List the connected sources for each operating use case.",
      "Highlight gaps or manual dependencies.",
      "Recommend the next integration that would improve delivery visibility."
    ],
    frequency: "Monthly",
    difficulty: "Moderate",
    valueLevel: "Core",
    measurableOutcome:
      "Clarifies where Wyatt is strong today and where additional data connections would increase operating value.",
    businessValue:
      "Helps operations leadership prioritize the next system connection with clear business rationale.",
    tags: ["integrations", "systems", "coverage"]
  }),
  useCase({
    id: "ops-billing-readiness-chore",
    title: "Billing Readiness Portfolio Check",
    roleId: "operations-leader",
    featureId: "chores",
    shortDescription:
      "Runs during mid-period and close to identify what is blocking billing across PMs and which owner needs to move next.",
    businessProblem:
      "Operations often owns the escalation path when billing stalls across teams, but the current blockers and owners are not always visible in one place.",
    examplePrompt:
      "During mid-period and close, show what is blocking billing across PMs, the reason each item is stalled, and the next owner required to move it.",
    workflow: [
      "Scan billing readiness across projects and PMs.",
      "Group blocked items by cause, owner, and office.",
      "Return an operations-ready escalation and follow-up list."
    ],
    frequency: "Mid-period and close",
    difficulty: "Easy",
    valueLevel: "High",
    measurableOutcome:
      "Improves cross-team billing follow-up and reduces portfolio-wide delays at close.",
    businessValue:
      "Lets operations act as the clearing function for billing bottlenecks instead of relying on fragmented updates.",
    tags: ["billing", "close", "portfolio"]
  }),
  useCase({
    id: "ops-scope-creep-watchlist-chore",
    title: "Scope Creep Watchlist",
    roleId: "operations-leader",
    featureId: "chores",
    shortDescription:
      "Builds a weekly watchlist of projects showing labor mix shifts, spend acceleration, and low remaining budget across the delivery organization.",
    businessProblem:
      "Operations leaders need earlier warning on pattern-based project deterioration, especially when the same issues are appearing across multiple PMs or offices.",
    examplePrompt:
      "Each week, detect projects showing labor mix shifts, spend acceleration, or low remaining budget and group them by PM and office.",
    workflow: [
      "Scan projects for scope creep signals and fee pressure patterns.",
      "Group the watchlist by PM, office, and issue type.",
      "Return a coaching and escalation view for operations."
    ],
    frequency: "Weekly",
    difficulty: "Moderate",
    valueLevel: "High",
    measurableOutcome:
      "Highlights project deterioration patterns across the portfolio early enough for operations to intervene.",
    businessValue:
      "Gives operations a practical way to spot repeated delivery and fee problems before they become systemic.",
    tags: ["scope-creep", "operations", "watchlist"]
  }),
  useCase({
    id: "ops-forecast-gap-chore",
    title: "Forecast Gap Escalation Chore",
    roleId: "operations-leader",
    featureId: "chores",
    shortDescription:
      "Runs a weekly check for capacity gaps, overloaded teams, and projects likely to slip because demand is outrunning available staff.",
    businessProblem:
      "Forecast problems rarely fail quietly; they become schedule misses, utilization imbalance, and unhappy PMs if not escalated early.",
    examplePrompt:
      "Each week, flag where demand exceeds capacity by discipline or office and route the issue to the right operations owner.",
    workflow: [
      "Compare upcoming work against staffed capacity.",
      "Identify the largest gaps and overbookings.",
      "Create an escalation list with office, discipline, and project context."
    ],
    frequency: "Weekly",
    difficulty: "Moderate",
    valueLevel: "High",
    measurableOutcome:
      "Finds cross-firm delivery constraints early enough to reallocate or hire before deadlines are hit.",
    businessValue:
      "Turns forecasting from a reporting exercise into an operational action loop.",
    tags: ["forecasting", "capacity", "escalation"]
  }),
  useCase({
    id: "bd-pursuit-roundup",
    title: "Pursuit and Proposal Roundup",
    roleId: "marketing-business-development",
    featureId: "roundups",
    shortDescription:
      "A daily view of active pursuits, proposal deadlines, CRM activity, client intelligence, and likely delivery impact.",
    businessProblem:
      "Marketing and BD teams need current pursuit signal, but it is often buried in CRM updates, inboxes, and proposal status checks.",
    examplePrompt:
      "Summarize active pursuits, proposal deadlines, CRM changes, client updates, and the likely delivery implications of top opportunities.",
    workflow: [
      "Pull open opportunities, activity updates, and key deadlines.",
      "Flag stale opportunities or pursuits missing next steps.",
      "Publish the pursuit priorities and supporting client context."
    ],
    frequency: "Daily",
    difficulty: "Easy",
    valueLevel: "High",
    measurableOutcome:
      "Improves pursuit review quality while reducing time spent assembling status updates.",
    businessValue:
      "Gives BD a cleaner operating rhythm and stronger context for go/no-go decisions.",
    tags: ["pursuits", "crm", "proposals"]
  }),
  useCase({
    id: "bd-crm-integration-view",
    title: "CRM Activity and Client Intelligence Integration",
    roleId: "marketing-business-development",
    featureId: "integrations",
    shortDescription:
      "Shows how Wyatt combines CRM activity, project history, and client context to support smarter pursuit decisions.",
    businessProblem:
      "BD teams need more than a list of pursuits; they need client history, market activity, and project intelligence in one place.",
    examplePrompt:
      "Connect CRM activity with project history and client context so I can see which pursuits deserve more attention this week.",
    workflow: [
      "Sync relevant CRM updates with related project and client history.",
      "Highlight the context that changes pursuit strategy.",
      "Show the team where data gaps still limit client intelligence."
    ],
    frequency: "Weekly",
    difficulty: "Moderate",
    valueLevel: "High",
    measurableOutcome:
      "Increases pursuit team context and reduces time spent gathering client background before reviews.",
    businessValue:
      "Makes business development discussions more grounded in firm history and real activity.",
    tags: ["crm", "client-intelligence", "growth"]
  }),
  useCase({
    id: "bd-proposal-brief-chat",
    title: "Proposal and Client Brief Chat",
    roleId: "marketing-business-development",
    featureId: "chats",
    shortDescription:
      "Helps proposal teams pull client, project, and sector context quickly before a pursuit decision or kickoff.",
    businessProblem:
      "Proposal teams lose time gathering internal knowledge that should be easy to ask for and summarize.",
    examplePrompt:
      "Give me a brief on this client, recent project history, similar wins, and any delivery concerns we should consider before we pursue.",
    workflow: [
      "Ask Wyatt for the client or opportunity brief.",
      "Review the relevant project and sector history.",
      "Use the output to support a kickoff or go/no-go decision."
    ],
    frequency: "Several times per week",
    difficulty: "Easy",
    valueLevel: "Core",
    measurableOutcome:
      "Saves proposal teams from repetitive manual research before pursuit discussions.",
    businessValue:
      "Improves proposal readiness and makes internal knowledge easier to reuse.",
    tags: ["briefing", "proposal", "client"]
  }),
  useCase({
    id: "acct-invoice-follow-up-chore",
    title: "Invoice Follow-Up Chore",
    roleId: "accounting-staff",
    featureId: "chores",
    shortDescription:
      "Creates daily follow-up tasks for invoices stuck on missing time, missing approval, or PM review issues.",
    businessProblem:
      "Accounting staff spend too much time checking status and chasing the next person when invoice flow gets stuck.",
    examplePrompt:
      "Each morning, create an invoice follow-up list showing what is blocked, why it is blocked, and who needs to move next.",
    workflow: [
      "Check the current billing workflow status.",
      "Group blocked items by reason and next owner.",
      "Publish a prioritized task list for accounting follow-up."
    ],
    frequency: "Daily",
    difficulty: "Easy",
    valueLevel: "High",
    measurableOutcome:
      "Reduces manual chase work and improves invoice turnaround time.",
    businessValue:
      "Turns billing follow-up into a cleaner queue instead of a status hunt.",
    tags: ["invoicing", "follow-up", "accounting"]
  }),
  useCase({
    id: "acct-billing-cash-conversion-roundup",
    title: "Billing and Cash Conversion",
    roleId: "accounting-staff",
    featureId: "roundups",
    shortDescription:
      "An accounting view of blocked billing, high-WIP / low-billing projects, AR aging, and the next action by owner.",
    businessProblem:
      "Accounting teams often work the details of billing and AR every day, but they need a cleaner operating surface than separate invoice, WIP, and aging checks.",
    examplePrompt:
      "Build a billing and cash conversion roundup showing ready-to-bill versus blocked, high-WIP / low-billing projects, AR aging by PM and project, and suggested next actions by owner.",
    workflow: [
      "Refresh billing, WIP, and AR indicators.",
      "Highlight the items slowing invoice release and collection.",
      "Return the next accounting and PM actions needed."
    ],
    frequency: "Daily during billing and close",
    difficulty: "Easy",
    valueLevel: "High",
    measurableOutcome:
      "Gives accounting staff a clearer daily working board for revenue conversion and collections follow-up.",
    businessValue:
      "Improves throughput by connecting billing and AR actions in one operational view.",
    tags: ["billing", "cash-conversion", "accounting"]
  }),
  useCase({
    id: "acct-policy-approval-exceptions-chore",
    title: "Policy and Approval Exceptions Queue",
    roleId: "accounting-staff",
    featureId: "chores",
    shortDescription:
      "Creates a recurring queue of missing approvals, unusual expenses, and missing comments that need accounting follow-up.",
    businessProblem:
      "Accounting staff are often the first to encounter approval and policy exceptions, but they need a better queue than ad hoc discovery during invoice and expense review.",
    examplePrompt:
      "Each week, create a queue of missing approvals, unusual expenses, and missing comments that need accounting review or follow-up.",
    workflow: [
      "Inspect time, expense, and approval records for exceptions.",
      "Group them by issue type and owner.",
      "Publish an accounting follow-up queue."
    ],
    frequency: "Weekly",
    difficulty: "Easy",
    valueLevel: "Core",
    measurableOutcome:
      "Reduces the time accounting spends manually finding approval and policy issues while working other processes.",
    businessValue:
      "Turns scattered exception discovery into a cleaner accounting workflow.",
    tags: ["approvals", "exceptions", "accounting"]
  }),
  useCase({
    id: "exec-board-financial-snapshot-roundup",
    title: "Board Financial Snapshot",
    roleId: "executive-principal",
    featureId: "roundups",
    shortDescription:
      "A board-facing executive view of revenue, EBITDA, cash, backlog, utilization, top financial risks, and profitability trends.",
    businessProblem:
      "Executives need a concise board-level financial picture that connects firm performance to key risks without reading the full finance package.",
    examplePrompt:
      "Build a board financial snapshot with headline revenue, EBITDA, cash, backlog, utilization, what changed this month, top financial risks and mitigations, a portfolio profitability chart, and a cash plus AR trend chart.",
    workflow: [
      "Summarize the top-level financial picture for executive review.",
      "Highlight what changed and what needs attention.",
      "Return a board-ready snapshot with charts and narrative."
    ],
    frequency: "Monthly build",
    difficulty: "Moderate",
    valueLevel: "Strategic",
    measurableOutcome:
      "Reduces executive prep time for board and principal financial discussions.",
    businessValue:
      "Gives executives a concise financial narrative without requiring them to parse the full finance package.",
    tags: ["board", "executive", "financials"]
  }),
  useCase({
    id: "acct-project-financial-lookup-chat",
    title: "Project Financial Lookup Chat",
    roleId: "accounting-staff",
    featureId: "chats",
    shortDescription:
      "Lets accounting staff ask direct questions about project balances, billing status, and transaction history.",
    businessProblem:
      "Routine project accounting questions should not require a custom report or waiting on a power user every time.",
    examplePrompt:
      "Show me the current WIP, billed-to-date, AR balance, and recent transaction activity for Project Aspen.",
    workflow: [
      "Ask the question using a project number or name.",
      "Review the current balances and recent movements.",
      "Use the result to answer a PM, controller, or client billing question."
    ],
    frequency: "Daily",
    difficulty: "Easy",
    valueLevel: "Core",
    measurableOutcome:
      "Speeds response time for everyday project accounting questions.",
    businessValue:
      "Gives accounting staff fast access to the detail they need without extra reporting overhead.",
    tags: ["lookup", "wip", "project-accounting"]
  }),
  useCase({
    id: "acct-close-checklist-roundup",
    title: "Close Readiness Roundup",
    roleId: "accounting-staff",
    featureId: "roundups",
    shortDescription:
      "A working board for open tasks, missing items, and exceptions that need resolution before close.",
    businessProblem:
      "Close becomes chaotic when open items live in scattered notes, emails, and separate checklists.",
    examplePrompt:
      "Build a close readiness board showing open tasks, blocked items, missing approvals, and unresolved accounting exceptions.",
    workflow: [
      "Pull the current close task and exception status.",
      "Highlight aging open items and the owners holding them.",
      "Provide a short summary for the day's close check-in."
    ],
    frequency: "Daily during close",
    difficulty: "Easy",
    valueLevel: "High",
    measurableOutcome:
      "Improves close coordination and lowers missed-task risk.",
    businessValue:
      "Makes accounting team execution more predictable during high-pressure close cycles.",
    tags: ["close", "tasks", "teamwork"]
  }),
  useCase({
    id: "hr-staffing-shortage-roundup",
    title: "Staffing Shortage Roundup",
    roleId: "hr-talent-recruiting",
    featureId: "roundups",
    shortDescription:
      "Shows where upcoming work is likely to create hiring pressure by discipline, office, and timing.",
    businessProblem:
      "Recruiting is often reactive because talent teams do not have a clear, trusted view of future staffing demand tied to sold or planned work.",
    examplePrompt:
      "Show the next 90-day staffing shortages by discipline and office based on backlog, active projects, and planned work.",
    workflow: [
      "Compare demand forecasts against staffed capacity.",
      "Identify the most urgent role shortages.",
      "Publish a recruiting-ready view of where hiring attention is needed."
    ],
    frequency: "Weekly",
    difficulty: "Moderate",
    valueLevel: "High",
    measurableOutcome:
      "Gives talent teams earlier visibility into where they need to recruit and when.",
    businessValue:
      "Aligns recruiting effort to real delivery demand instead of anecdotal requests.",
    tags: ["hiring", "capacity", "forecast"]
  }),
  useCase({
    id: "hr-recruiting-alignment-chore",
    title: "Recruiting Alignment Chore",
    roleId: "hr-talent-recruiting",
    featureId: "chores",
    shortDescription:
      "Turns hiring shortages into a recurring action list for recruiters and hiring managers.",
    businessProblem:
      "Even when demand is known, follow-up between operations, department leads, and recruiters can be inconsistent.",
    examplePrompt:
      "Every week, turn the top staffing shortages into recruiter follow-up tasks with role, office, urgency, and hiring manager context.",
    workflow: [
      "Read the current shortage and staffing-risk view.",
      "Create an action queue by role and owner.",
      "Summarize what changed since the last recruiting review."
    ],
    frequency: "Weekly",
    difficulty: "Moderate",
    valueLevel: "High",
    measurableOutcome:
      "Improves recruiter alignment and reduces the lag between identifying a need and acting on it.",
    businessValue:
      "Keeps talent work tied to the firm's most urgent delivery constraints.",
    tags: ["recruiting", "workflow", "alignment"]
  }),
  useCase({
    id: "hr-hiring-scenario-lab",
    title: "Hiring Scenario Lab",
    roleId: "hr-talent-recruiting",
    featureId: "labs",
    shortDescription:
      "Tests what hiring or onboarding outcomes would look like if key roles are filled faster, slower, or in different offices.",
    businessProblem:
      "Talent decisions are hard to prioritize when teams cannot see the delivery and utilization impact of hiring timing.",
    examplePrompt:
      "If we fill senior electrical roles in Los Angeles 30 days later than planned, what projects and utilization targets are most affected?",
    workflow: [
      "Choose a hiring scenario to model.",
      "Estimate the timing impact on staffing and delivery.",
      "Review the operational and financial consequences."
    ],
    frequency: "Monthly or as needed",
    difficulty: "Advanced",
    valueLevel: "Strategic",
    measurableOutcome:
      "Helps HR and leadership prioritize hiring with clearer operational tradeoffs.",
    businessValue:
      "Connects recruiting strategy directly to delivery performance and backlog health.",
    tags: ["scenario", "hiring", "what-if"]
  }),
  useCase({
    id: "it-integration-health-roundup",
    title: "Integration Health Roundup",
    roleId: "it-systems-admin",
    featureId: "integrations",
    shortDescription:
      "A systems view of connected sources, data freshness, admin dependencies, and where Wyatt workflows may be limited by missing connectivity.",
    businessProblem:
      "Admin teams need to understand whether Wyatt is operating on current, connected data before scaling usage.",
    examplePrompt:
      "Show system connection health, data freshness, and any integration gaps affecting Roundups, Chores, or Chats this week.",
    workflow: [
      "Inspect connector status and recent sync health.",
      "Identify workflows depending on stale or partial data.",
      "Report the most important admin follow-ups."
    ],
    frequency: "Weekly",
    difficulty: "Moderate",
    valueLevel: "Core",
    measurableOutcome:
      "Improves trust in Wyatt outputs by giving admins a clear data-health operating view.",
    businessValue:
      "Supports stable rollout by making integration issues visible before users lose confidence.",
    tags: ["admin", "connectors", "data-health"]
  }),
  useCase({
    id: "it-permission-audit-chore",
    title: "Permission and Access Audit",
    roleId: "it-systems-admin",
    featureId: "chores",
    shortDescription:
      "Runs a recurring check on role-based access, permission drift, and admin exceptions that need cleanup.",
    businessProblem:
      "Governance issues compound quickly when access models change but no one is reviewing the resulting drift.",
    examplePrompt:
      "Each week, identify permission mismatches, stale admin exceptions, and role-based access gaps affecting Wyatt usage.",
    workflow: [
      "Compare current access states to the expected role model.",
      "Highlight permission drift and exceptions.",
      "Publish a cleanup queue for admin review."
    ],
    frequency: "Weekly",
    difficulty: "Advanced",
    valueLevel: "High",
    measurableOutcome:
      "Reduces governance cleanup work and lowers the chance of inappropriate access persisting unnoticed.",
    businessValue:
      "Keeps Wyatt enterprise-ready as adoption grows across roles and offices.",
    tags: ["permissions", "governance", "security"]
  }),
  useCase({
    id: "it-adoption-lab",
    title: "Adoption Pattern Lab",
    roleId: "it-systems-admin",
    featureId: "labs",
    shortDescription:
      "Explores how different roles are using Wyatt and where training or product enablement would have the biggest payoff.",
    businessProblem:
      "Technical owners often lack a good picture of whether Wyatt is being used deeply, lightly, or inconsistently across the firm.",
    examplePrompt:
      "Analyze usage patterns by role and identify where adoption is strong, shallow, or at risk because users are not finding value quickly.",
    workflow: [
      "Review activity and usage behavior by role or team.",
      "Identify patterns tied to low adoption or repeated friction.",
      "Suggest enablement or admin changes worth piloting."
    ],
    frequency: "Monthly",
    difficulty: "Advanced",
    valueLevel: "Core",
    measurableOutcome:
      "Helps admin teams target training and rollout support instead of relying on anecdotal feedback.",
    businessValue:
      "Creates a more deliberate, measurable Wyatt rollout path.",
    tags: ["adoption", "enablement", "pilot"]
  }),
  useCase({
    id: "dept-discipline-performance-roundup",
    title: "Discipline Performance Roundup",
    roleId: "department-leader",
    featureId: "roundups",
    shortDescription:
      "Shows department-level backlog, utilization, margin, staffing, and client delivery pressure in one place.",
    businessProblem:
      "Department leaders need a business view of their team, not just a set of project lists and financial reports.",
    examplePrompt:
      "Summarize department performance across backlog, utilization, margin, staffing gaps, and at-risk client work.",
    workflow: [
      "Aggregate department projects, staffing, and financial indicators.",
      "Highlight the biggest changes and pressure points.",
      "Provide a short operating summary for the department lead."
    ],
    frequency: "Weekly",
    difficulty: "Easy",
    valueLevel: "High",
    measurableOutcome:
      "Gives department leaders faster clarity before internal portfolio and staffing reviews.",
    businessValue:
      "Makes discipline-level management more proactive and less report-dependent.",
    tags: ["department", "discipline", "performance"]
  }),
  useCase({
    id: "dept-team-capacity-chat",
    title: "Department Capacity Chat",
    roleId: "department-leader",
    featureId: "chats",
    shortDescription:
      "Answers targeted questions about team utilization, underused staff, overloaded PMs, or work concentration.",
    businessProblem:
      "Leaders frequently need specific staffing answers that are too detailed for a static dashboard but too urgent to wait on analysts.",
    examplePrompt:
      "Which people in my civil department are underutilized but have the right experience for projects starting next month?",
    workflow: [
      "Ask a team or capacity question.",
      "Review Wyatt's staffing and workload answer.",
      "Use the result to guide reallocations or coaching."
    ],
    frequency: "Several times per week",
    difficulty: "Moderate",
    valueLevel: "High",
    measurableOutcome:
      "Speeds staffing decisions and helps leaders make better use of available capacity.",
    businessValue:
      "Lets department leaders act on team data without depending on manual resourcing analysis.",
    tags: ["capacity", "utilization", "team"]
  }),
  useCase({
    id: "dept-portfolio-review-chore",
    title: "Department Portfolio Review Chore",
    roleId: "department-leader",
    featureId: "chores",
    shortDescription:
      "Runs a recurring review of the department's most important project, staffing, and margin exceptions before leadership meetings.",
    businessProblem:
      "Department reviews are less effective when leaders walk in with stale or scattered information about which jobs need attention.",
    examplePrompt:
      "Before my weekly department meeting, compile the top project, staffing, and margin exceptions and recommend what I should review with the team.",
    workflow: [
      "Scan the department portfolio for changes and exceptions.",
      "Prepare the leadership review list.",
      "Route follow-up items after the meeting if needed."
    ],
    frequency: "Weekly",
    difficulty: "Moderate",
    valueLevel: "High",
    measurableOutcome:
      "Makes leadership review meetings shorter and more focused on actual decisions.",
    businessValue:
      "Turns recurring portfolio review into a disciplined operating process.",
    tags: ["leadership", "portfolio", "department"]
  }),
  useCase({
    id: "pmo-resource-demand-roundup",
    title: "Resource Demand and Allocation Roundup",
    roleId: "pmo-resource-manager",
    featureId: "roundups",
    shortDescription:
      "A working view of near-term demand, current allocations, underutilized staff, and emerging conflicts across projects and phases.",
    businessProblem:
      "PMO and resource managers need a live allocation board, but staffing information is often fragmented across project updates and spreadsheets.",
    examplePrompt:
      "Show me the next eight weeks of demand, current allocations, overbooked staff, and likely resource conflicts by discipline and office.",
    workflow: [
      "Pull current assignments and forecasted demand.",
      "Highlight overbooked, underutilized, and at-risk roles.",
      "Deliver a practical working board for resourcing decisions."
    ],
    frequency: "Daily",
    difficulty: "Easy",
    valueLevel: "High",
    measurableOutcome:
      "Improves allocation quality and reduces time spent building staffing views manually.",
    businessValue:
      "Gives resource managers a cleaner basis for staffing conversations and decisions.",
    tags: ["resource-management", "allocations", "conflicts"]
  }),
  useCase({
    id: "pmo-conflict-resolution-chore",
    title: "Resource Conflict Resolution Chore",
    roleId: "pmo-resource-manager",
    featureId: "chores",
    shortDescription:
      "Turns double-bookings, role shortages, and schedule conflicts into a clear resolution queue.",
    businessProblem:
      "The PMO loses time when conflict identification and resolution live in email threads instead of an operating workflow.",
    examplePrompt:
      "Each week, identify resource conflicts across projects and assign follow-up actions to the right PM or department leader.",
    workflow: [
      "Scan current and near-term allocation conflicts.",
      "Group issues by urgency and owner.",
      "Publish an action queue with recommended options."
    ],
    frequency: "Weekly",
    difficulty: "Moderate",
    valueLevel: "High",
    measurableOutcome:
      "Improves speed and consistency of resource conflict resolution.",
    businessValue:
      "Helps the PMO move from reactive juggling to a repeatable resourcing process.",
    tags: ["resource-conflict", "workflow", "staffing"]
  }),
  useCase({
    id: "pmo-availability-chat",
    title: "Availability and Match Chat",
    roleId: "pmo-resource-manager",
    featureId: "chats",
    shortDescription:
      "Answers which people might be good fits for a need based on availability, role, office, and likely demand.",
    businessProblem:
      "Good staffing decisions are often slowed down by weak visibility into current and future availability across teams.",
    examplePrompt:
      "Who is the best match for a senior electrical design role starting in two weeks in Seattle, and who becomes available soon after?",
    workflow: [
      "Ask Wyatt for a staffing match.",
      "Review likely candidates and tradeoffs.",
      "Use the answer as a starting point for assignment decisions."
    ],
    frequency: "Daily",
    difficulty: "Moderate",
    valueLevel: "Core",
    measurableOutcome:
      "Cuts staffing search time and improves the quality of first-pass matches.",
    businessValue:
      "Makes resource decisions faster without sacrificing context.",
    tags: ["matching", "availability", "staffing"]
  }),
  useCase({
    id: "staff-project-context-chat",
    title: "Project Context Chat",
    roleId: "junior-staff-general-employee",
    featureId: "chats",
    shortDescription:
      "Helps newer staff ask simple questions about projects, teams, deadlines, and where to find the right context.",
    businessProblem:
      "Junior staff often lose time looking for project basics or interrupting others for information that should be easy to retrieve.",
    examplePrompt:
      "What phase is Project Harbor in, who is the PM, what are the next deadlines, and where should I look for the latest deliverables?",
    workflow: [
      "Ask a project or workflow question in plain language.",
      "Review the concise answer and links to the right context.",
      "Move on with the task instead of hunting for information."
    ],
    frequency: "Daily",
    difficulty: "Easy",
    valueLevel: "Core",
    measurableOutcome:
      "Reduces time spent hunting for basic project information and lowers interrupt load on PMs and coordinators.",
    businessValue:
      "Makes Wyatt immediately useful for everyday employees, not just managers.",
    tags: ["onboarding", "project-info", "productivity"]
  }),
  useCase({
    id: "staff-task-reminder-chore",
    title: "Task and Deadline Reminder Chore",
    roleId: "junior-staff-general-employee",
    featureId: "chores",
    shortDescription:
      "Creates lightweight reminders for deadlines, missing time, overdue admin items, or project actions.",
    businessProblem:
      "Simple misses like timesheets, approvals, or near-term deadlines create avoidable rework and frustration.",
    examplePrompt:
      "Give me a daily list of deadlines, missing admin items, and project actions I should clear before the end of the day.",
    workflow: [
      "Check the employee's assigned work and required admin tasks.",
      "Rank the most important items for today.",
      "Deliver a short reminder list with due context."
    ],
    frequency: "Daily",
    difficulty: "Easy",
    valueLevel: "Core",
    measurableOutcome:
      "Improves basic compliance and daily productivity for newer employees.",
    businessValue:
      "Turns Wyatt into an everyday work assistant instead of only a reporting surface.",
    tags: ["reminders", "daily-work", "adoption"]
  }),
  useCase({
    id: "staff-personal-priority-roundup",
    title: "Personal Daily Priority Roundup",
    roleId: "junior-staff-general-employee",
    featureId: "roundups",
    shortDescription:
      "A simple daily view of today's project priorities, deadlines, meetings, and admin tasks.",
    businessProblem:
      "General employees benefit when Wyatt gives them a low-friction daily habit instead of asking them to invent use cases from scratch.",
    examplePrompt:
      "Every morning, summarize my key project work, deadlines, meetings, and admin tasks for today.",
    workflow: [
      "Gather the employee's known work items and project context.",
      "Highlight what matters today and what is coming next.",
      "Keep the view simple enough to become a daily habit."
    ],
    frequency: "Daily",
    difficulty: "Easy",
    valueLevel: "High",
    measurableOutcome:
      "Improves adoption by giving employees an obvious first Wyatt workflow to rely on every day.",
    businessValue:
      "Creates broad Wyatt relevance beyond leadership and operational roles.",
    tags: ["daily-roundup", "habits", "employee"]
  })
];

export const featureIds = wyattFeatures.map((feature) => feature.id);
