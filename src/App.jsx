import { useMemo } from "react";
import {
  ArrowRight,
  ExternalLink,
  BookOpen,
  Briefcase,
  GraduationCap,
  Plane,
  PlayCircle,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

const BLOG_HOME = "https://sunnyfge.blog";

const chaptersData = [
  {
    id: "ch1",
    title: "第一章｜工作的複利：越做越高薪的觀察",
    icon: Briefcase,
    items: [
      {
        id: "1-1",
        title: "怎麼選工作：樂趣、報酬、成就感的取捨",
        url: "https://sunnyfge.blog/648-carrer/",
        isCompleted: true,
      },
      {
        id: "1-2",
        title: "為什麼你很努力，卻拿不到好考績",
        url: "https://sunnyfge.blog/b1-2promotionjob/",
        isCompleted: true,
      },
      {
        id: "1-3",
        title: "怎麼換工作，薪資與機會最大化",
        url: "https://sunnyfge.blog/book-1-3-discusspay/",
        isCompleted: true,
      },
      {
        id: "1-4",
        title: "做好主管工作的競爭心得",
        url: "https://sunnyfge.blog/book-1-4-goodmanager/",
        isCompleted: true,
      },
      {
        id: "1-5",
        title: "第一份工作：工程師的現實與誤區",
        url: "https://sunnyfge.blog/book-1-5-job1/",
        isCompleted: true,
      },
      {
        id: "1-6",
        title: "第二份工作：從個人到空降主管",
        url: "https://sunnyfge.blog/book-1-6-job2/",
        isCompleted: true,
      },
      {
        id: "1-7",
        title: "主管思維：如何看產業與競爭",
        url: "https://sunnyfge.blog/book-1-4-goodmanager/",
        isCompleted: true,
      },
      {
        id: "1-8",
        title: "IC 設計產業全解析（給未來工程師）",
        url: "https://sunnyfge.blog/657-icdesign/",
        isCompleted: true,
      },
      {
        id: "1-9",
        title: "工作與生活平衡的真相：工作能力",
        url: "",
        isCompleted: true,
      },
      { id: "1-10", title: "職場平衡", url: BLOG_HOME, isCompleted: true },
    ],
  },
  {
    id: "ch2",
    title: "二、投資的複利",
    icon: TrendingUp,
    items: [
      { id: "2-1", title: "原始積累", url: BLOG_HOME, isCompleted: false },
      { id: "2-2", title: "收入分配", url: BLOG_HOME, isCompleted: false },
      { id: "2-3", title: "匯率配置", url: BLOG_HOME, isCompleted: false },
      { id: "2-4", title: "股票心得", url: BLOG_HOME, isCompleted: false },
      { id: "2-5", title: "ETF權威策略", url: BLOG_HOME, isCompleted: true },
      { id: "2-6", title: "債券", url: BLOG_HOME, isCompleted: false },
      { id: "2-7", title: "基金", url: BLOG_HOME, isCompleted: false },
      { id: "2-8", title: "航空里程", url: BLOG_HOME, isCompleted: false },
      { id: "2-9", title: "酒店會籍", url: BLOG_HOME, isCompleted: false },
      { id: "2-10", title: "買房選擇", url: BLOG_HOME, isCompleted: false },
      { id: "2-11", title: "投資系統", url: BLOG_HOME, isCompleted: false },
      { id: "2-12", title: "槓桿風險", url: BLOG_HOME, isCompleted: false },
    ],
  },
  {
    id: "ch3",
    title: "三、學習的複利",
    icon: GraduationCap,
    items: [
      { id: "3-1", title: "學習心法", url: BLOG_HOME, isCompleted: true },
      { id: "3-2", title: "清大電子", url: BLOG_HOME, isCompleted: false },
      { id: "3-3", title: "交大博士", url: BLOG_HOME, isCompleted: false },
      { id: "3-4", title: "比利時魯汶", url: BLOG_HOME, isCompleted: false },
      { id: "3-5", title: "語言邏輯", url: BLOG_HOME, isCompleted: false },
      { id: "3-6", title: "英文實戰", url: BLOG_HOME, isCompleted: false },
      { id: "3-7", title: "日文策略", url: BLOG_HOME, isCompleted: false },
      { id: "3-8", title: "西班牙文", url: BLOG_HOME, isCompleted: false },
      { id: "3-9", title: "台大PMBA", url: BLOG_HOME, isCompleted: false },
      { id: "3-10", title: "AI時代學習", url: BLOG_HOME, isCompleted: false },
    ],
  },
  {
    id: "ch4",
    title: "四、旅遊的複利",
    icon: Plane,
    items: [
      { id: "4-1", title: "旅遊投資", url: BLOG_HOME, isCompleted: true },
      { id: "4-2", title: "美國規劃", url: BLOG_HOME, isCompleted: false },
      { id: "4-3", title: "歐洲鐵道", url: BLOG_HOME, isCompleted: false },
      { id: "4-4", title: "歐洲五國", url: BLOG_HOME, isCompleted: false },
      { id: "4-5", title: "中國規劃", url: BLOG_HOME, isCompleted: false },
      { id: "4-6", title: "出差觀察", url: BLOG_HOME, isCompleted: false },
      { id: "4-7", title: "全球視野", url: BLOG_HOME, isCompleted: false },
    ],
  },
];

function App() {
  const allSections = useMemo(
    () => chaptersData.flatMap((chapter) => chapter.items),
    [],
  );

  const completedCount = allSections.filter((section) => section.isCompleted).length;
  const totalCount = allSections.length;
  const progress = Math.round((completedCount / totalCount) * 100);

  return (
    <div
      className="min-h-screen bg-white text-slate-900"
      style={{ fontFamily: "Google Sans, Inter, Noto Sans TC, sans-serif" }}
    >
      <section className="relative overflow-hidden bg-[#1a365d] text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-400 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-400 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm">
            <Sparkles size={16} />
            新書預告・個人品牌頁
          </div>

          <h1 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
            步步紮實
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-100 md:text-xl">
            從鄉下小孩到走遍 50 國，工程師到主管的職涯與生活複利筆記。
          </p>

          <p className="mt-3 inline-flex rounded-full border border-white/35 bg-white/10 px-4 py-1.5 text-sm font-semibold text-cyan-100">
            預計 10 月上市
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://sunnyfge.blog"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-[#1a365d] shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <BookOpen size={18} />
              閱讀部落格精選文章
              <ArrowRight size={18} />
            </a>

            <a
              href="https://www.youtube.com/@johnnyblog6626"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/20"
            >
              <PlayCircle size={18} />
              前往 YouTube 頻道
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <section className="mb-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Target className="text-[#1a365d]" />
              <h2 className="text-xl font-bold text-[#1a365d]">
                Writing Progress
              </h2>
            </div>
            <span className="rounded-lg bg-white px-3 py-1 text-sm font-semibold text-slate-700">
              {completedCount}/{totalCount} 完成
            </span>
          </div>

          <div className="h-4 w-full overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-[#1a365d] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="mt-3 text-sm text-slate-600">
            全書進度：<span className="font-bold text-[#1a365d]">{progress}%</span>
          </p>
        </section>

        <section className="mb-14">
          <h2 className="mb-6 text-2xl font-extrabold text-[#1a365d]">
            Chapter Roadmap
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {chaptersData.map((chapter) => {
              const Icon = chapter.icon;
              return (
                <article
                  key={chapter.id}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg bg-[#1a365d]/10 p-2 text-[#1a365d]">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800">
                      {chapter.title}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {chapter.items.map((section) => {
                      const sectionId = section.id;
                      const taskKey = `${chapter.id}-${sectionId}`;
                      const sectionLink = section.url;
                      const hasLink = Boolean(sectionLink);
                      const hasExternalArticle =
                        hasLink && sectionLink !== BLOG_HOME;
                      return (
                        <li key={taskKey}>
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex min-w-0 items-center gap-3">
                              <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-slate-300 text-[#1a365d] focus:ring-[#1a365d]"
                                checked={section.isCompleted}
                                readOnly
                                disabled
                              />
                              {hasLink ? (
                                <a
                                  href={sectionLink}
                                  target="_blank"
                                  rel="noreferrer"
                                  className={
                                    section.isCompleted
                                      ? "truncate text-blue-500 font-medium hover:underline"
                                      : "truncate text-slate-700 hover:text-blue-600 hover:underline"
                                  }
                                >
                                  {`${section.id} ${section.title}`}
                                  {hasExternalArticle && (
                                    <ExternalLink className="ml-1 inline-block" size={12} />
                                  )}
                                </a>
                              ) : (
                                <span
                                  className={
                                    section.isCompleted
                                      ? "truncate text-blue-500 font-medium"
                                      : "truncate text-slate-700"
                                  }
                                >
                                  {`${section.id} ${section.title}`}
                                </span>
                              )}
                            </div>

                            {hasLink ? (
                              <a
                                href={sectionLink}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex shrink-0 items-center gap-1 rounded-md border border-blue-200 px-2 py-1 text-xs font-semibold text-blue-600 transition hover:bg-blue-50"
                              >
                                {`閱讀 ${sectionId}`}
                                {hasExternalArticle && <ExternalLink size={12} />}
                              </a>
                            ) : (
                              <span className="inline-flex shrink-0 items-center rounded-md border border-slate-200 px-2 py-1 text-xs font-semibold text-slate-400">
                                即將上線
                              </span>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        <section className="rounded-2xl bg-[#1a365d] p-8 text-white">
          <h2 className="text-2xl font-extrabold">為什麼值得期待《步步紮實》？</h2>
          <p className="mt-4 max-w-4xl leading-relaxed text-slate-100">
            這不是一本只談成功學的書，而是一套可落地實踐的人生複利系統。從
            <span className="font-semibold text-white"> 45年職涯長尾效應 </span>到
            <span className="font-semibold text-white"> 投資複利系統 </span>，從
            <span className="font-semibold text-white"> 準備型學習法 </span>到
            <span className="font-semibold text-white"> 全球旅遊底韻 </span>
            ，幫助你在工作、財富、學習、視野四條路上同步累積，長期勝出。
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
