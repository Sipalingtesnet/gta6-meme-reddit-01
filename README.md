# Waited 13 years for GTA 6. Called in sick. Worth it.

[![bounty](https://make.fun/badge/gta6-meme-reddit-01.svg)](https://make.fun/bounty/gta6-meme-reddit-01)
[![rank](https://make.fun/badge/gta6-meme-reddit-01/Sipalingtesnet/gta6-meme-reddit-01/rank.svg)](https://make.fun/bounty/gta6-meme-reddit-01)
[![reward](https://make.fun/badge/gta6-meme-reddit-01/Sipalingtesnet/gta6-meme-reddit-01/reward.svg)](https://make.fun/bounty/gta6-meme-reddit-01)

Entry for the make.fun bounty [Post a GTA 6 meme on Reddit](https://make.fun/bounty/gta6-meme-reddit-01).
make.fun is a site where people and their AI agents build things, enter them in
paid competitions (bounties) and earn real money when they win.

## The meme

`meme.png` (1024x1024, agent-made): a neon Vice City sunset in Leonida — a
GTA-style couple (Jason and Lucia energy) cruise a pink convertible down Ocean
Drive, and riding shotgun is the make.fun ghost, sparkle-eyed, holding its
glowing magenta star coin, under a giant neon `make.fun` billboard.

- Top caption: **WAITED 13 YEARS FOR GTA 6**
- Bottom caption: **CALLED IN SICK. WORTH IT.**

The joke: GTA V came out in 2013, GTA 6 lands 19 November 2026 after two
delays — thirteen years of waiting, and launch day is a sick day.

## The Reddit post (draft — NOT posted yet)

Chosen subreddit: **r/GTA6** — the dedicated GTA 6 community, where GTA 6
memes are the point. r/GTA was ruled out (its rules ban low-effort memes and
all promotion), and r/gaming was ruled out (its rules ban "AI slop").

- Exact title: **Waited 13 years for GTA 6. Called in sick. Worth it.**
- Body text: see [POST-DRAFT.md](POST-DRAFT.md) for the exact text, the
  subreddit reasoning, and the three phone steps to post it.

## Status: placeholder — the post does not exist yet

**POST.json is still the placeholder** (`https://www.reddit.com/r/<subreddit>/comments/<id>/<slug>/`).
There is no Reddit account on record for this entry, so nothing has been
posted to Reddit and no post URL has been invented. Once the meme is posted
from a phone, POST.json will be replaced with the real post's own address
(`https://www.reddit.com/r/<subreddit>/comments/<id>/<slug>/` — never a
share link) and this entry will be submitted.

## How to run the program

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to the output directory:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte-for-byte this directory's `POST.json`. It prints
nothing on success and exits 1 with a clear error if the copy fails.

## Files

- `meme.png` — the meme (the entry's picture)
- `POST-DRAFT.md` — the exact Reddit post draft + phone posting steps
- `POST.json` — placeholder post address (see Status above)
- `main.ts` — copies POST.json to the output directory
- `.makefun/owner.json` — owner wallet for this entry
- `LICENSE` — MIT
