import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Megis | Dijital Ajans: SEO, SEM, AI Reklam, E-Ticaret & Web Tasarım';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
          padding: 60,
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 24 }}>
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 20,
              background: 'linear-gradient(135deg, #00d4aa, #00a886)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 44,
            }}
          >
            ⚡
          </div>
          <span style={{ fontSize: 64, fontWeight: 800, color: '#ffffff' }}>
            Megis
          </span>
        </div>
        <div
          style={{
            fontSize: 26,
            color: '#94a3b8',
            textAlign: 'center',
            maxWidth: 900,
            lineHeight: 1.4,
            marginTop: 16,
          }}
        >
          Dijital Ajans: SEO, SEM, AI Reklam, E-Ticaret & Web Tasarım
        </div>
        <div style={{ display: 'flex', gap: 16, marginTop: 36 }}>
          {['SEO', 'SEM', 'AI Ads', 'E-Ticaret'].map((badge) => (
            <div
              key={badge}
              style={{
                padding: '8px 20px',
                borderRadius: 24,
                background: 'rgba(0, 212, 170, 0.15)',
                border: '1px solid rgba(0, 212, 170, 0.3)',
                color: '#5eead4',
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              {badge}
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32, fontSize: 20, color: '#64748b' }}>
          megis.vercel.app
        </div>
      </div>
    ),
    { ...size },
  );
}
