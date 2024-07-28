import { HomePageProps } from "@/models/IDictionary/HomePage";
import { Locale } from "../../../i18n-config";
import getLocalizedData from "@/services/getLocalizedData";
import BannerSectionHomePage from "../_sections/homepage/BannerSectionHomePage";


export default async function Page({ params: { lang } }: { params: { lang: Locale } }) {
  const { banner } = await getLocalizedData<HomePageProps>(lang, 'homePage');

  return (
    <main>
      <BannerSectionHomePage {...banner} />
      <div>
        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima maxime, harum optio sint saepe dolor voluptatum eos praesentium magnam soluta animi unde veritatis doloribus explicabo. Molestias, placeat. Enim, quo suscipit.</div>
        <div>Minus vel debitis vero, voluptatibus, repellendus aliquam error voluptas molestiae et, saepe est cum obcaecati doloremque dolor natus inventore. Accusantium, quae asperiores dolore deserunt consequatur suscipit sint voluptatem voluptates nemo.</div>
        <div>Perspiciatis explicabo, reiciendis id eaque iure inventore tempora accusantium eius officia laudantium temporibus asperiores magni in fugit delectus quae maxime esse, necessitatibus illum. Obcaecati, sunt cumque quia a error sit?</div>
        <div>Harum, blanditiis? Odio fugit error quasi culpa atque asperiores facilis amet nihil molestias sequi consectetur, adipisci cupiditate voluptate. Eaque voluptatibus neque explicabo, eligendi at nostrum. Ea esse animi laboriosam laudantium.</div>
        <div>Nobis libero aliquid dolore veniam temporibus molestias mollitia nisi numquam suscipit in id modi deserunt nihil iure eligendi adipisci, odio natus at. Distinctio dolores, cum modi reprehenderit fugiat debitis eaque?</div>
        <div>Dolor ullam eveniet vero harum, consectetur mollitia ratione? Reiciendis, dolorum exercitationem quia omnis repellat illo aspernatur dolores nisi perferendis quae asperiores placeat, aliquam modi repellendus. Eos impedit ipsum molestias ea.</div>
        <div>Ullam reiciendis accusamus amet pariatur dolor molestias architecto quam sed, dolores officiis officia autem debitis magnam iusto corporis cumque sit molestiae ipsum sapiente provident soluta sunt aspernatur harum obcaecati. Sapiente.</div>
        <div>Suscipit sunt soluta optio eos mollitia sequi possimus eum odio, sed, repudiandae commodi accusantium dolorem tempore quia numquam! Cupiditate vel neque porro aperiam ducimus eum eligendi exercitationem repudiandae non commodi!</div>
        <div>Velit laudantium corrupti reiciendis, totam voluptates temporibus cupiditate, facilis nisi tempore accusantium, animi quos? Quidem molestias voluptate dignissimos aspernatur? Quaerat minima nobis excepturi recusandae quasi ipsa maiores natus, vero itaque.</div>
        <div>Incidunt nostrum libero corporis unde. Blanditiis eius sit qui, nesciunt id asperiores fugit. At nihil non earum aperiam porro neque ipsa eum, eaque eligendi quaerat, laudantium, voluptas illo deleniti ullam.</div>
        <div>Delectus rerum illum vitae? Nisi, reiciendis, veritatis repellendus nostrum praesentium eius inventore quis fuga aperiam mollitia dignissimos numquam consequuntur. Voluptatem, similique sequi. Exercitationem pariatur iure fuga temporibus facere et eligendi!</div>
        <div>Veritatis atque molestiae quae magni adipisci praesentium illum, eos temporibus aperiam culpa, provident maxime vitae iste voluptas dolores ex, blanditiis velit perspiciatis distinctio eum accusantium consectetur facilis ipsam. Reiciendis, neque!</div>
        <div>Cupiditate repellendus officiis molestias ullam perferendis officia magni temporibus veniam! Nostrum repellat cumque autem velit dignissimos culpa vero quo ipsam, voluptate quae rerum ex itaque doloribus necessitatibus sed nesciunt cum.</div>
        <div>Cupiditate eligendi natus, beatae labore magni inventore veniam libero ipsam voluptatem eius quis eveniet consectetur debitis, quasi fugiat esse quibusdam. Similique dignissimos, quibusdam nulla perspiciatis laudantium distinctio illo nobis expedita.</div>
        <div>Consectetur dolorem sint nulla veniam perferendis dolorum labore aliquid dicta, temporibus optio illo molestias laudantium explicabo ullam deserunt id sit reiciendis dolor animi iste sed nemo. Ex illo numquam error?</div>
        <div>Neque vero totam deleniti, amet alias, at omnis, quod cupiditate saepe quos quisquam! Similique incidunt expedita eveniet. Distinctio autem magni, ipsa facere placeat, omnis dolorum quas rem iusto earum reprehenderit?</div>
        <div>Modi ex dolorum neque libero autem minus molestias, laudantium officia nisi nobis beatae? Ullam ut veritatis molestiae unde sunt soluta cum? Fugiat quis culpa, asperiores illo dolor vero commodi officia.</div>
        <div>Dolorem quod magni ratione nesciunt consequuntur natus sed doloremque, vel autem deleniti explicabo. Dolor, voluptate deserunt! Est possimus perspiciatis quo error voluptatem, eveniet reiciendis sint, neque non minima animi repellendus.</div>
        <div>Cum possimus aliquid rerum quia rem eligendi voluptatibus, autem quo et exercitationem hic, quod omnis optio itaque laboriosam, porro delectus ducimus accusamus amet nihil incidunt numquam ab molestiae quam? Facilis.</div>
        <div>Animi ratione voluptas consequuntur, eaque hic, eius ipsa asperiores illo, numquam dolorum minus iste accusantium. Est, cumque neque tempore aliquid odit non aperiam fugiat nihil? Iure laboriosam numquam labore laborum.</div>
      </div>
    </main>
  );
}
