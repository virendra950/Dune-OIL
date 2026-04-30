import { useState } from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const DUNE_PRIMARY = '#000320';
const DUNE_GOLD = '#feb700';
const DUNE_SECONDARY = '#7c5800';
const DUNE_OUTLINE = '#c6c5d2';

const frictionData = [
  { temp: '-40°C', dune: 0.041, industry: 0.082, premium: 0.058 },
  { temp: '0°C', dune: 0.038, industry: 0.074, premium: 0.052 },
  { temp: '40°C', dune: 0.034, industry: 0.068, premium: 0.049 },
  { temp: '80°C', dune: 0.031, industry: 0.071, premium: 0.051 },
  { temp: '120°C', dune: 0.033, industry: 0.083, premium: 0.057 },
  { temp: '160°C', dune: 0.036, industry: 0.098, premium: 0.066 },
  { temp: '200°C', dune: 0.042, industry: 0.121, premium: 0.079 },
];

const viscosityData = [
  { product: 'Apex', vi: 178, drain: 12 },
  { product: 'Titan', vi: 165, drain: 18 },
  { product: 'Force', vi: 192, drain: 15 },
  { product: 'Shift', vi: 184, drain: 14 },
  { product: 'Synchro', vi: 171, drain: 16 },
  { product: 'Arctic', vi: 158, drain: 10 },
  { product: 'Shield', vi: 205, drain: 22 },
];

const radarData = [
  { metric: 'Friction', dune: 98, baseline: 62 },
  { metric: 'Thermal', dune: 94, baseline: 68 },
  { metric: 'Longevity', dune: 91, baseline: 60 },
  { metric: 'Cold Start', dune: 96, baseline: 55 },
  { metric: 'Shear Hold', dune: 93, baseline: 64 },
  { metric: 'Oxidation', dune: 89, baseline: 58 },
];

const regionData = [
  { quarter: 'Q1', mena: 142, asia: 98, europe: 76, africa: 54 },
  { quarter: 'Q2', mena: 158, asia: 114, europe: 82, africa: 61 },
  { quarter: 'Q3', mena: 171, asia: 129, europe: 91, africa: 73 },
  { quarter: 'Q4', mena: 189, asia: 147, europe: 104, africa: 88 },
];

function ChartShell({ eyebrow, title, description, children }) {
  return (
    <div className="bg-white border border-dune-outline-variant/30 p-6 md:p-10 flex flex-col">
      <div className="mb-6">
        <span className="font-label text-[10px] font-bold uppercase tracking-widest text-dune-secondary">
          {eyebrow}
        </span>
        <h3 className="font-headline text-xl md:text-2xl font-extrabold text-dune-primary mt-2">
          {title}
        </h3>
        <p className="text-sm text-dune-on-surface-variant mt-2 leading-relaxed">{description}</p>
      </div>
      <div className="h-72 md:h-80 w-full">{children}</div>
    </div>
  );
}

const tooltipStyle = {
  backgroundColor: DUNE_PRIMARY,
  border: 'none',
  borderRadius: 0,
  color: '#fff',
  fontFamily: 'Inter, sans-serif',
  fontSize: 12,
  padding: '12px 16px',
};

const tooltipLabelStyle = {
  color: DUNE_GOLD,
  fontFamily: 'Manrope, sans-serif',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  fontSize: 11,
  marginBottom: 4,
};

const axisStyle = { fill: '#454651', fontSize: 11, fontFamily: 'Work Sans, sans-serif' };

const TABS = [
  { id: 'friction', label: 'Friction Coefficient' },
  { id: 'viscosity', label: 'Viscosity Index' },
  { id: 'profile', label: 'Performance Profile' },
  { id: 'reach', label: 'Distribution Volume' },
];

export default function PerformanceGraphs() {
  const [active, setActive] = useState('friction');

  return (
    <section
      id="performance"
      data-testid="performance-graphs-section"
      className="py-20 md:py-32 bg-dune-surface-container-low"
    >
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12 md:mb-16 items-end">
          <div className="lg:col-span-7">
            <span className="font-label text-[10px] font-bold uppercase tracking-widest text-dune-secondary">
              Performance Data
            </span>
            <h2
              data-testid="performance-graphs-heading"
              className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold text-dune-primary mt-4 leading-tight"
            >
              The Numbers Behind <br />
              <span className="text-dune-secondary">Every Drop.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-dune-on-surface-variant leading-relaxed">
              Independent ASTM-standardized testing across temperature, pressure, and shear conditions.
              Filter the dataset to see how Dune lubricants compare to industry baseline and premium-tier alternatives.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div
          data-testid="performance-graphs-tabs"
          className="flex flex-wrap gap-1 mb-1 border-b border-dune-outline-variant/40"
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              data-testid={`tab-${tab.id}`}
              onClick={() => setActive(tab.id)}
              className={`px-5 md:px-7 py-4 font-headline text-xs md:text-sm font-bold uppercase tracking-widest transition-colors border-b-2 -mb-px ${
                active === tab.id
                  ? 'text-dune-primary border-dune-gold'
                  : 'text-dune-on-surface-variant border-transparent hover:text-dune-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Chart panel */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 bg-dune-outline-variant/30">
          <div className="lg:col-span-2 bg-white">
            {active === 'friction' && (
              <ChartShell
                eyebrow="ASTM D5183"
                title="Friction Coefficient vs Operating Temperature"
                description="Lower coefficient means less drag, less heat, and longer component life. Dune holds a tighter band across the full thermal envelope."
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={frictionData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                    <CartesianGrid stroke={DUNE_OUTLINE} strokeDasharray="2 4" vertical={false} />
                    <XAxis dataKey="temp" tick={axisStyle} tickLine={false} axisLine={{ stroke: DUNE_OUTLINE }} />
                    <YAxis tick={axisStyle} tickLine={false} axisLine={{ stroke: DUNE_OUTLINE }} />
                    <Tooltip contentStyle={tooltipStyle} labelStyle={tooltipLabelStyle} cursor={{ stroke: DUNE_GOLD, strokeWidth: 1, strokeDasharray: '4 4' }} />
                    <Legend wrapperStyle={{ fontFamily: 'Work Sans, sans-serif', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.15em' }} />
                    <Line type="monotone" dataKey="industry" stroke={DUNE_OUTLINE} strokeWidth={2} dot={{ r: 3 }} name="Industry baseline" />
                    <Line type="monotone" dataKey="premium" stroke={DUNE_SECONDARY} strokeWidth={2} dot={{ r: 3 }} name="Premium tier" />
                    <Line type="monotone" dataKey="dune" stroke={DUNE_GOLD} strokeWidth={3} dot={{ r: 4, fill: DUNE_PRIMARY }} name="Dune" />
                  </LineChart>
                </ResponsiveContainer>
              </ChartShell>
            )}

            {active === 'viscosity' && (
              <ChartShell
                eyebrow="ASTM D2270"
                title="Viscosity Index Across the Dune Lineup"
                description="A higher viscosity index means a flatter response curve — the oil keeps protective film thickness at both startup and peak load."
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={viscosityData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                    <CartesianGrid stroke={DUNE_OUTLINE} strokeDasharray="2 4" vertical={false} />
                    <XAxis dataKey="product" tick={axisStyle} tickLine={false} axisLine={{ stroke: DUNE_OUTLINE }} />
                    <YAxis tick={axisStyle} tickLine={false} axisLine={{ stroke: DUNE_OUTLINE }} />
                    <Tooltip contentStyle={tooltipStyle} labelStyle={tooltipLabelStyle} cursor={{ fill: 'rgba(254, 183, 0, 0.08)' }} />
                    <Legend wrapperStyle={{ fontFamily: 'Work Sans, sans-serif', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.15em' }} />
                    <Bar dataKey="vi" fill={DUNE_GOLD} name="Viscosity index" />
                    <Bar dataKey="drain" fill={DUNE_PRIMARY} name="Drain interval (k km)" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartShell>
            )}

            {active === 'profile' && (
              <ChartShell
                eyebrow="Composite Index"
                title="Performance Profile: Dune vs Industry Baseline"
                description="Six-axis benchmark scoring Dune against the volume-weighted industry average. Higher is better on every axis."
              >
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData} outerRadius="75%">
                    <PolarGrid stroke={DUNE_OUTLINE} />
                    <PolarAngleAxis dataKey="metric" tick={{ ...axisStyle, fontSize: 12 }} />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ ...axisStyle, fontSize: 10 }} stroke={DUNE_OUTLINE} />
                    <Tooltip contentStyle={tooltipStyle} labelStyle={tooltipLabelStyle} />
                    <Legend wrapperStyle={{ fontFamily: 'Work Sans, sans-serif', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.15em' }} />
                    <Radar name="Industry baseline" dataKey="baseline" stroke={DUNE_OUTLINE} fill={DUNE_OUTLINE} fillOpacity={0.3} />
                    <Radar name="Dune" dataKey="dune" stroke={DUNE_GOLD} fill={DUNE_GOLD} fillOpacity={0.45} />
                  </RadarChart>
                </ResponsiveContainer>
              </ChartShell>
            )}

            {active === 'reach' && (
              <ChartShell
                eyebrow="FY 2024 Shipments"
                title="Distribution Volume by Region"
                description="Quarterly outbound volume in thousand-litre units across MENA, Asia-Pacific, Europe, and Africa from the Sharjah hub."
              >
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={regionData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                    <defs>
                      <linearGradient id="goldFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={DUNE_GOLD} stopOpacity={0.85} />
                        <stop offset="100%" stopColor={DUNE_GOLD} stopOpacity={0.1} />
                      </linearGradient>
                      <linearGradient id="primaryFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={DUNE_PRIMARY} stopOpacity={0.7} />
                        <stop offset="100%" stopColor={DUNE_PRIMARY} stopOpacity={0.05} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke={DUNE_OUTLINE} strokeDasharray="2 4" vertical={false} />
                    <XAxis dataKey="quarter" tick={axisStyle} tickLine={false} axisLine={{ stroke: DUNE_OUTLINE }} />
                    <YAxis tick={axisStyle} tickLine={false} axisLine={{ stroke: DUNE_OUTLINE }} />
                    <Tooltip contentStyle={tooltipStyle} labelStyle={tooltipLabelStyle} />
                    <Legend wrapperStyle={{ fontFamily: 'Work Sans, sans-serif', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.15em' }} />
                    <Area type="monotone" dataKey="mena" stackId="1" stroke={DUNE_GOLD} fill="url(#goldFill)" name="MENA" />
                    <Area type="monotone" dataKey="asia" stackId="1" stroke={DUNE_PRIMARY} fill="url(#primaryFill)" name="Asia-Pacific" />
                    <Area type="monotone" dataKey="europe" stackId="1" stroke={DUNE_SECONDARY} fill={DUNE_SECONDARY} fillOpacity={0.4} name="Europe" />
                    <Area type="monotone" dataKey="africa" stackId="1" stroke={DUNE_OUTLINE} fill={DUNE_OUTLINE} fillOpacity={0.4} name="Africa" />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartShell>
            )}
          </div>

          {/* Side stats panel */}
          <aside data-testid="performance-side-stats" className="bg-dune-primary text-white p-8 md:p-10 flex flex-col justify-between">
            <div>
              <span className="font-label text-[10px] font-bold uppercase tracking-widest text-dune-gold">
                Headline Result
              </span>
              <p className="font-headline text-5xl md:text-6xl font-black mt-4 mb-2">
                {active === 'friction' && '57%'}
                {active === 'viscosity' && '178'}
                {active === 'profile' && '94'}
                {active === 'reach' && '610k'}
              </p>
              <p className="font-label text-xs uppercase tracking-widest text-white/60">
                {active === 'friction' && 'Lower friction vs industry baseline'}
                {active === 'viscosity' && 'Average viscosity index across lineup'}
                {active === 'profile' && 'Composite performance score / 100'}
                {active === 'reach' && 'Litres shipped in FY 2024'}
              </p>
            </div>

            <div className="space-y-5 mt-10">
              {[
                { k: 'Test cycles', v: '4,820' },
                { k: 'Lab partners', v: '7' },
                { k: 'Sample batches', v: '312' },
                { k: 'Standards met', v: 'ASTM · API · ISO' },
              ].map((row) => (
                <div key={row.k} className="flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="font-label text-[10px] uppercase tracking-widest text-white/60">{row.k}</span>
                  <span className="font-headline text-sm font-bold text-dune-gold">{row.v}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
