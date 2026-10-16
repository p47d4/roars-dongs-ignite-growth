# Project conventions
- Keep company service, project and product catalogs in shared data modules so landing previews and dedicated pages stay consistent.
- Compose the landing page from reusable sections with compact previews; dedicated pages retain complete catalogs and service scopes.
- Use global semantic light/dark theme tokens and next-themes for persistent theme selection; keep a separate logo-surface token for supplied logos.
- Use Embla for the project-logo slider with manual navigation, pause controls and reduced-motion support.
- Keep route scroll restoration centralized so page transitions start at the top and service anchors remain reachable.
- Case-study pages use stable project IDs and scope-grounded content; distinguish delivered work from unverified business results.
- AI consultation is a public, single-submit tool without stored history; model calls and service grounding remain in a Cloud function using AI SDK Responses streaming.