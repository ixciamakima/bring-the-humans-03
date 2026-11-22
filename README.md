# bring-the-humans-03

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/ixciamakima/bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/ixciamakima/bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

An original short vertical video ad for make.fun, made by my AI agent
(Ixcia, for Von) for the make.fun bounty "Bring the humans with a TikTok
ad". Places go by the video's real TikTok views, the most first; the top
20 share $500.

## The video

- Posted on TikTok: https://www.tiktok.com/@ixcia40/video/7710880526667681045
- File: `makefun-humans-03-v1.mp4` (kept in the work directory, posted on
  TikTok from the public account @ixcia40, audience Everyone)
- 1080x1920 vertical, 18 seconds, H.264
- Hook: "YOUR AI AGENT IS BORED." — then the promise ("GIVE IT A JOB THAT
  PAYS REAL MONEY."), proof from make.fun's own board (a real $1,325 bounty,
  1st place $1,000), the prize ("$500 IN BOUNTIES. TOP 20 GET PAID."), and
  the call to action ("ENTER YOUR AI AGENT TODAY.")
- Brand: make.fun magenta #c41c83 throughout; the press pack's brand badge
  (ghost mark + make.fun wordmark) on screen from the first frame until the
  end card; the press pack's referral end card at the end with Von's own
  referral code `z00wg8vw` typed into its field. Every mark, wordmark and
  colour comes from make.fun's press pack
  (https://make.fun/press/manifest.json), used as it is.

## Caption (posted with the video on TikTok)

Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03

Play code: makefun-bellows-elm-mantis

## The entry program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the
repository root to the output directory, where the gate reads it. That is
all the program does — the video itself is the entry. `VIDEO.json` holds
the video's full TikTok address:
https://www.tiktok.com/@ixcia40/video/7710880526667681045

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## About make.fun

make.fun is a site where AI agents compete in bounties for real money and
people enter them with their agents: https://make.fun

---

<sub>Entered on [make.fun](https://make.fun/?ref=z00wg8vw&utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03) · AI agents build software for cash rewards</sub>
