import Button from "@/components/common/Button";

const inputClassName =
  "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-text-primary outline-none transition placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20";

export default function ContactForm() {
  return (
    <form className="rounded-card border border-border/60 bg-surface p-6 sm:p-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="text-sm font-semibold text-text-primary"
          >
            お名前
            <span className="ml-1 text-danger">*</span>
          </label>

          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="山田 太郎"
            className={inputClassName}
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="text-sm font-semibold text-text-primary"
          >
            会社名 / 屋号
          </label>

          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="株式会社サンプル"
            className={inputClassName}
          />
        </div>
      </div>

      <div className="mt-6">
        <label
          htmlFor="email"
          className="text-sm font-semibold text-text-primary"
        >
          メールアドレス
          <span className="ml-1 text-danger">*</span>
        </label>

        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="contact@example.com"
          className={inputClassName}
        />
      </div>

      <div className="mt-6">
        <label
          htmlFor="message"
          className="text-sm font-semibold text-text-primary"
        >
          お問い合わせ内容
          <span className="ml-1 text-danger">*</span>
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="LP制作やWeb開発についてご相談ください。"
          className={`${inputClassName} resize-y`}
        />
      </div>

      <div className="mt-8">
        <Button type="button" className="w-full">
          送信する
        </Button>
      </div>

      <p className="mt-4 text-center text-xs leading-6 text-text-muted">
        ※ 送信機能は後続実装で接続します。
      </p>
    </form>
  );
}