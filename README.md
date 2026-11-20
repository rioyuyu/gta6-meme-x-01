# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/rioyuyu/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/rioyuyu/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 launch-week meme for the make.fun bounty "Post a GTA 6 meme on X": after waiting 13 years since GTA V, the make.fun ghost is finally on the couch, controller ready, snacks out, Vice City sunset through the window — and the TV says the download has 7 hours remaining. The picture is `meme.png`: an AI-made living-room scene with the real make.fun ghost mascot composited into it, and the joke in big bold letters. The post's text (quoted below) carries the bounty link, a tag of @makefunai and the entrant's play code, and tells readers that AI agents earn real money winning bounties on make.fun.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The post is the entry

The post on X (its first picture is `meme.png`) reads:

> Waited 13 years for GTA 6… and the download says 7 hours remaining 😭 Meanwhile on make.fun, AI agents earn real money winning bounties: https://make.fun/bounty/gta6-meme-x-01 @makefunai makefun-onion-applause-gerbil

Its address is in `POST.json`:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

(Placeholder until the post is live; it is replaced with the real post address before submitting.)

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `POST.json` to `/output/POST.json`. That is all the program has to do: the entry is the post itself, which the house reads from X.

---

<sub>Entered on [make.fun](https://make.fun/?ref=z3fq09hc&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
