import { Providers } from "../_providers/providers";

export default function RootLayout({
  children,
  landingModal,
  commingSoonModal,
}: {children: React.ReactNode, landingModal: React.ReactNode, commingSoonModal: React.ReactNode}) {
  return (
        <>
          <div>
            루트 레이아웃 (default)
          </div>
          <div>
              {children}
              {landingModal}
              {commingSoonModal}
          </div>
        </>
  );
}
