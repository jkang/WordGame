import { wordRootData } from "./word-root-data"

export const wordRootDataByLevel = {
  "middle-school-8": wordRootData,
  "high-school-unit1": {
    prefixes: [
      { id: "hs-p1", prefix: "in-", meaning: "进入，在内", examples: ["include", "inside", "input"] },
      { id: "hs-p2", prefix: "trans-", meaning: "变换，转变", examples: ["translate", "transform", "transport"] },
      { id: "hs-", prefix: "con-", meaning: "共同", examples: ["congratulate", "conference", "connect"] },
      { id: "hs-p4", prefix: "ex-", meaning: "表加强", examples: ["exact", "examine", "excellent"] },
      { id: "hs-p5", prefix: "il-", meaning: "不", examples: ["illegal", "illogical", "illiterate"] },
      { id: "hs-p6", prefix: "sur-", meaning: "上", examples: ["survive", "surface", "surpass"] },
      { id: "hs-p7", prefix: "dis-", meaning: "不", examples: ["disappoint", "disagree", "dislike"] },
      { id: "hs-p8", prefix: "ap-", meaning: "表加强", examples: ["apply", "appear", "approve"] },
      { id: "hs-p9", prefix: "pro-", meaning: "向前", examples: ["promote", "progress", "provide"] },
      { id: "hs-p10", prefix: "re-", meaning: "一再", examples: ["remark", "return", "repeat"] },
    ],
    roots: [
      { id: "hs-r1", root: "-clude-", meaning: "关", examples: ["include", "exclude", "conclude"] },
      { id: "hs-r2", root: "-memor-", meaning: "记忆", examples: ["memorial", "memory", "memorize"] },
      { id: "hs-r3", root: "-act-", meaning: "做", examples: ["exact", "action", "active"] },
      { id: "hs-r4", root: "-late-", meaning: "带来", examples: ["translate", "relate", "correlate"] },
      { id: "hs-r5", root: "-ply-", meaning: "重叠", examples: ["apply", "reply", "supply"] },
      { id: "hs-r6", root: "-lect-", meaning: "讲", examples: ["lecture", "select", "collect"] },
      { id: "hs-r7", root: "-grat-", meaning: "令人高兴的", examples: ["grateful", "congratulate", "gratitude"] },
      { id: "hs-r8", root: "-posit-", meaning: "放", examples: ["position", "positive", "deposit"] },
      { id: "hs-r9", root: "-pon-", meaning: "放", examples: ["component", "postpone", "opponent"] },
      { id: "hs-r10", root: "-viv-", meaning: "生命", examples: ["survive", "vivid", "revive"] },
      { id: "hs-r11", root: "-bio-", meaning: "生命，生物", examples: ["biography", "biology", "biosphere"] },
      { id: "hs-r12", root: "-graph-", meaning: "写", examples: ["biography", "photograph", "telegraph"] },
      { id: "hs-r13", root: "-tele-", meaning: "远", examples: ["telescope", "telephone", "television"] },
      { id: "hs-r14", root: "-scope-", meaning: "视野", examples: ["telescope", "microscope", "periscope"] },
      { id: "hs-r15", root: "-fer-", meaning: "带来", examples: ["differ", "refer", "transfer"] },
      { id: "hs-r16", root: "-mark-", meaning: "做标记", examples: ["remark", "bookmark", "landmark"] },
      { id: "hs-r17", root: "-legal-", meaning: "合法的", examples: ["illegal", "legal", "legislation"] },
      { id: "hs-r18", root: "-cid-", meaning: "切", examples: ["accident", "decide", "incident"] },
      { id: "hs-r19", root: "-mot-", meaning: "动", examples: ["promote", "motion", "motor"] },
      { id: "hs-r20", root: "-appoint-", meaning: "委任", examples: ["disappoint", "appointment", "appoint"] },
      { id: "hs-r21", root: "-port-", meaning: "拿，运", examples: ["portable", "import", "export"] },
    ],
    suffixes: [
      { id: "hs-s1", suffix: "-ful", meaning: "充满...的", examples: ["grateful", "beautiful", "careful"] },
      { id: "hs-s2", suffix: "-able", meaning: "可...的", examples: ["portable", "suitable", "comfortable"] },
      { id: "hs-s3", suffix: "-ion", meaning: "表示名词", examples: ["position", "action", "education"] },
      { id: "hs-s4", suffix: "-ial", meaning: "...的", examples: ["memorial", "special", "official"] },
      { id: "hs-s5", suffix: "-ure", meaning: "表名词", examples: ["lecture", "culture", "structure"] },
      { id: "hs-s6", suffix: "-ate", meaning: "表动词", examples: ["congratulate", "create", "educate"] },
      { id: "hs-s7", suffix: "-ent", meaning: "表示物", examples: ["component", "student", "different"] },
      { id: "hs-s8", suffix: "-y", meaning: "表名词", examples: ["memory", "biography", "accuracy"] },
    ],
  },

  "high-school-unit2":  {
    prefixes: [
      { id: "hs2-p1", prefix: "re-", meaning: "再次，向后", examples: ["remain", "recycle", "retell"] }, // remain - re + main, recycle - re + cycle, retell - re + tell
      { id: "hs2-p2", prefix: "un-", meaning: "不", examples: ["unfortunate"] }, // unfortunate - un + fortunate
      { id: "hs2-p3", prefix: "inter-", meaning: "在...之间", examples: ["interrupt"] }, // interrupt - inter + rupt
      { id: "hs2-p4", prefix: "over-", meaning: "在...之上", examples: ["overlook"] }, // overlook - over + look
      { id: "hs2-p5", prefix: "de-", meaning: "向下，分离，表加强", examples: ["defend", "decide"] }, // defend - de + fend, decide - de + cide
      { id: "hs2-p6", prefix: "con-", meaning: "共同，一起", examples: ["conventional"] }, // conventional - con + vent + -ional
      { id: "hs2-p7", prefix: "en-", meaning: "使...，在...之内", examples: ["enthusiastic", "entry"] }, // enthusiastic - en + thusiasm + -tic, entry - en + -try
    ],
    roots: [
      { id: "hs2-r1", root: "-main-", meaning: "停留，留下", examples: ["remain"] }, // remain - re + main
      { id: "hs2-r2", root: "-minor-", meaning: "较小的", examples: ["minority"] }, // minority - minor + -ity
      { id: "hs2-r3", root: "-vent-", meaning: "来", examples: ["conventional"] }, // conventional - con + vent + -ional
      { id: "hs2-r4", root: "-cup-", meaning: "抓住，占有", examples: ["occupy"] }, // occupy - oc- + cup + -y
      { id: "hs2-r5", root: "-pass-", meaning: "感情，感受", examples: ["passive"] }, // passive - pass + -ive
      { id: "hs2-r6", root: "-motiv-", meaning: "移动， двигать", examples: ["motivation"] }, // motivation - motiv + -ation
      { id: "hs2-r7", root: "-cycle-", meaning: "圆，环", examples: ["recycle"] }, // recycle - re + cycle
      { id: "hs2-r8", root: "-crea-", meaning: "创造", examples: ["creature"] }, // creature - crea + -ture
      { id: "hs2-r9", root: "-phys-", meaning: "自然，物理", examples: ["physics"] }, // physics - phys + -ics
      { id: "hs2-r10", root: "-analy-", meaning: "分解，分析", examples: ["analyse"] }, // analyse - ana- + -lyse
      { id: "hs2-r11", root: "-frag-", meaning: "打破，打碎", examples: ["fragile"] }, // fragile - frag + -ile
      { id: "hs2-r12", root: "-wit-", meaning: "知道", examples: ["witness"] }, // witness - wit + -ness
      { id: "hs2-r13", root: "-strum-", meaning: "构造，建立", examples: ["instrument"] }, // instrument - in- + strum + -ent
      { id: "hs2-r14", root: "-mott-", meaning: "动", examples: ["motto"] }, // motto - mott + -o
      { id: "hs2-r15", root: "-adolesc-", meaning: "成长", examples: ["adolescence"] }, // adolescence - adolesc + -ence
      { id: "hs2-r16", root: "-rupt-", meaning: "断裂，打破", examples: ["interrupt"] }, // interrupt - inter + rupt
      { id: "hs2-r17", root: "-tron-", meaning: "电子", examples: ["electronic"] }, // electronic - electron + -ic
      { id: "hs2-r18", root: "-cid-", meaning: "切，割，决定", examples: ["decide", "accident"] }, // decide - de + cide, accident - ac- + cid + -ent (general example)
      { id: "hs2-r19", root: "-fend-", meaning: "打击，防御", examples: ["defend"] }, // defend - de + fend
      { id: "hs2-r20", root: "-poten-", meaning: "能力，力量", examples: ["potential"] }, // potential - poten + -tial
      { id: "hs2-r21", root: "-pur-", meaning: "目的，意图", examples: ["purpose", "purposefully"] }, // purpose, purposefully - purpose + -ful/-ly
      { id: "hs2-r22", root: "-minister-", meaning: "服务，管理", examples: ["minister"] }, // minister
      { id: "hs2-r23", root: "-trem-", meaning: "极端", examples: ["extreme", "extremely"] }, // extreme, extremely - extreme + -ly
      { id: "hs2-r24", root: "-fort-", meaning: "幸运", examples: ["unfortunate"] }, // unfortunate - un + fortunate
      { id: "hs2-r25", root: "-tell-", meaning: "讲述", examples: ["retell"] }, // retell - re + tell
      { id: "hs2-r26", root: "-other-", meaning: "其他的", examples: ["other"] }, // other
    ],
    suffixes: [
      { id: "hs2-s1", suffix: "-ity", meaning: "表示名词", examples: ["minority"] }, // minority - minor + -ity
      { id: "hs2-s2", suffix: "-ive", meaning: "...的", examples: ["passive"] }, // passive - pass + -ive
      { id: "hs2-s3", suffix: "-tion", meaning: "表示名词", examples: ["motivation", "occupation"] }, // motivation, occupation - occupy + -ation
      { id: "hs2-s4", suffix: "-al", meaning: "...的", examples: ["potential", "conventional"] }, // potential, conventional - convent + -ional
      { id: "hs2-s5", suffix: "-ly", meaning: "副词后缀", examples: ["sincerely", "thoroughly", "normally", "electronically", "extremely", "unfortunately", "purposefully", "purposely", "poorly"] }, // many adverbs
      { id: "hs2-s6", suffix: "-ment", meaning: "表示名词", examples: ["instrument"] }, // instrument - instrument
      { id: "hs2-s7", suffix: "-ant", meaning: "表示人或物", examples: ["assistant", "immigrant", "servant"] }, // added general examples, no direct example in unit2 but common suffix
      { id: "hs2-s8", suffix: "-ence", meaning: "表示名词", examples: ["adolescence", "defence"] }, // adolescence, defence - defend + -ence
      { id: "hs2-s9", suffix: "-ic", meaning: "...的", examples: ["enthusiastic", "electronic", "physics"] }, // enthusiastic, electronic, physics
      { id: "hs2-s10", suffix: "-able", meaning: "可...的", examples: ["fragile", "bearable", "portable"] }, // fragile, bearable, portable (general example)
      { id: "hs2-s11", suffix: "-ness", meaning: "表示名词", examples: ["witness"] }, // witness - witness
      { id: "hs2-s12", suffix: "-o", meaning: "表抽象名词", examples: ["motto"] }, // motto - motto
      { id: "hs2-s13", suffix: "-ward", meaning: "向...", examples: ["award", "forward", "backward"] }, // award, forward, backward (general example)
    ],
  },

  "high-school-unit3": {
    prefixes: [
      { id: "hs3-p1", prefix: "un-", meaning: "不", examples: ["unbearable"] },
      { id: "hs3-p2", prefix: "dis-", meaning: "不，dis-", examples: ["disadvantage", "disaster"] },
      { id: "hs3-p3", prefix: "over-", meaning: "超过，在上", examples: ["overcome"] },
      { id: "hs3-p4", prefix: "ad-", meaning: "to, toward, 表加强", examples: ["admire", "address", "attend", "accommodation", "assume"] },
      { id: "hs3-p5", prefix: "ex-", meaning: "出，向外", examples: ["extension", "exercise", "example"] },
      { id: "hs3-p6", prefix: "re-", meaning: "一再，再次", examples: ["remind", "reasonable", "re-radiation"] }, // reasonable - re- intensive, remind - re- again, radiation - re- again (hypothetical)
    ],
    roots: [
      { id: "hs3-r1", root: "-clar-", meaning: "清楚", examples: ["clarify"] },
      { id: "hs3-r2", root: "-fair-", meaning: "做，为", examples: ["affair"] },
      { id: "hs3-r3", root: "-mir-", meaning: "惊奇，看", examples: ["admire"] },
      { id: "hs3-r4", root: "-spect-", meaning: "看", examples: ["suspect", "especially"] }, // especially - es- (ex-) + special + -ly, special related to spect-
      { id: "hs3-r5", root: "-vari-", meaning: "变化，多样", examples: ["variety"] },
      { id: "hs3-r6", root: "-sum-", meaning: "拿取，高", examples: ["assume"] },
      { id: "hs3-r7", root: "-miss-", meaning: "送出，放出", examples: ["miss"] }, // miss - let go, send away feeling
      { id: "hs3-r8", root: "-sacr-", meaning: "神圣", examples: ["sacrifice"] },
      { id: "hs3-r9", root: "-termin-", meaning: "边界，限制", examples: ["determine"] },
      { id: "hs3-r10", root: "-aster-", meaning: "星星", examples: ["disaster"] },
      { id: "hs3-r11", root: "-bear-", meaning: " বহন，忍受", examples: ["unbearable"] },
      { id: "hs3-r12", root: "-ample-", meaning: "折叠", examples: ["example"] }, // example - ex- + ample - taken out from fold, a sample
      { id: "hs3-r13", root: "-punct-", meaning: "点，刺", examples: ["punctual"] },
      { id: "hs3-r14", root: "-hibit-", meaning: "持有", examples: ["prohibit"] },
      { id: "hs3-r15", root: "-valid-", meaning: "强壮，有价值", examples: ["valid"] },
      { id: "hs3-r16", root: "-come-", meaning: "来，去", examples: ["overcome", "accommodation"] }, // accommodation - ac- + commod- + -ation, commod- related to come
      { id: "hs3-r17", root: "-dress-", meaning: "引导，调整", examples: ["address"] },
      { id: "hs3-r18", root: "-tail-", meaning: "切割", examples: ["tailor"] },
      { id: "hs3-r19", root: "-don-", meaning: "给予", examples: ["donate"] },
      { id: "hs3-r20", root: "-foc-", meaning: "中心，火炉", examples: ["focus"] },
      { id: "hs3-r21", root: "-radi-", meaning: "光线，射线", examples: ["radiation"] },
      { id: "hs3-r22", root: "-tend-", meaning: "伸展", examples: ["attend", "extension"] }, // extension - ex- + tend- + -ion, attend - at- + tend-
    ],
    suffixes: [
      { id: "hs3-s1", suffix: "-able", meaning: "可...的", examples: ["unbearable", "reasonable", "available"] },
      { id: "hs3-s2", suffix: "-ion", meaning: "表示名词", examples: ["extension", "radiation", "accommodation"] },
      { id: "hs3-s3", suffix: "-ty", meaning: "表示名词", examples: ["variety", "duty"] },
      { id: "hs3-s4", suffix: "-er", meaning: "表示人或物", examples: ["taxpayer", "tailor", "cheer"] }, // tailor - person who tails (cuts), cheer - one who cheers
      { id: "hs3-s5", suffix: "-ance", meaning: "表示名词", examples: ["importance", "guidance"] },
      { id: "hs3-s6", suffix: "-ive", meaning: "...的", examples: ["passive", "active", "expensive"] }, // Added general example, not directly from wordlist 3 but useful.
    ],
  },
}
