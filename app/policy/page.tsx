function page() {
  return (
    <section className="pt-30 pb-20">
      <main>
        <h1 className="text-center text-3xl md:text-4xl text-gray-800 leading-snug font-medium pb-10">
          سياسة البيع والشراء لدى
          <span className="font-extrabold text-[#8B5E3C]"> Digoo</span>
        </h1>
        <div className="px-6 md:px-20 py-8 bg-gray-50 rounded-lg shadow-sm">
          <ul className="list-disc  text-right space-y-4 marker:text-[#8B5E3C] marker:text-lg text-gray-800 leading-relaxed">
            <li>يتم شحن المنتجات خلال 3 إلى 5 أيام عمل من تأكيد الطلب .</li>
            <li>
              في حال وجود أي مشكلة في المنتج، يمكن للعميل التواصل معنا خلال 48
              ساعة من الاستلام.
            </li>
            <li>
              لا نقبل عمليات الاسترجاع أو التبديل إلا إذا كان المنتج به عيب
              صناعي مثبت.
            </li>
            <li>
              الأسعار تشمل ضريبة القيمة المضافة، ولا تشمل رسوم الشحن التي يتم
              حسابها عند الدفع.
            </li>
          </ul>
        </div>
      </main>
    </section>
  );
}

export default page;
