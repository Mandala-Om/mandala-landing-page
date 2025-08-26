import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="font-sans bg-gradient-to-b from-rose-50 to-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center p-6">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          静心曼陀罗 · 艺术与疗愈空间
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl mb-6 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          通过艺术与冥想，帮助人们情绪释放、关系和谐、身心平衡。
        </motion.p>
        <Button size="lg" className="rounded-2xl shadow-lg">立即报名课程</Button>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 text-center bg-rose-100/50">
        <h2 className="text-3xl font-semibold mb-6">使命与愿景</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          我们的使命是通过艺术与冥想，陪伴更多人找回内在平静，疗愈情绪，改善关系。我们的愿景是成为新山最具疗愈能量的艺术与心灵成长中心。
        </p>
      </section>

      {/* Courses */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">课程介绍</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {["曼陀罗绘画课程", "情绪释放绘画", "神圣几何冥想", "企业艺术疗愈工作坊"].map((course, i) => (
            <Card key={i} className="rounded-2xl shadow-md hover:shadow-xl transition">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3">{course}</h3>
                <p className="text-gray-600 mb-4">探索艺术与内心的连接，释放压力与情绪。</p>
                <Button variant="outline">了解更多</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-6 bg-rose-50">
        <h2 className="text-3xl font-semibold text-center mb-12">作品展示</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-60 bg-white rounded-2xl shadow-md flex items-center justify-center">
              <span className="text-gray-400">作品 {i+1}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">学员分享</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["我感到情绪更平静了", "家庭沟通改善了", "身体不适也缓解了"].map((feedback, i) => (
            <Card key={i} className="rounded-2xl shadow-md bg-rose-100/40">
              <CardContent className="p-6 text-center italic text-gray-700">
                {feedback}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Studio Intro */}
      <section className="py-16 px-6 bg-rose-100/30 text-center">
        <h2 className="text-3xl font-semibold mb-6">工作室介绍</h2>
        <p className="max-w-2xl mx-auto text-lg mb-6">
          这里是一个温馨的空间，让你放下压力、回归内心。我们位于新山，环境舒适，氛围疗愈。
        </p>
        <Button variant="outline">查看位置</Button>
      </section>

      {/* Products */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">艺术品与产品</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["曼陀罗画作", "绘画材料包", "线上课程"].map((item, i) => (
            <Card key={i} className="rounded-2xl shadow-md">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3">{item}</h3>
                <Button>立即购买</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6 bg-rose-50 text-center">
        <h2 className="text-3xl font-semibold mb-6">立即报名 / 联系我们</h2>
        <form className="max-w-xl mx-auto grid gap-4">
          <input type="text" placeholder="姓名" className="p-3 rounded-xl border" />
          <input type="tel" placeholder="电话" className="p-3 rounded-xl border" />
          <input type="email" placeholder="邮箱" className="p-3 rounded-xl border" />
          <textarea placeholder="课程意向" className="p-3 rounded-xl border" />
          <Button size="lg">提交</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-gray-600 bg-white border-t">
        <p>© 2025 静心曼陀罗 | 艺术 · 疗愈 · 静心 · 成长</p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">小红书</a>
          <a href="#">TikTok</a>
        </div>
      </footer>
    </div>
  );
}
