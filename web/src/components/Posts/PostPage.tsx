import React from 'react';

import { PostSnippetFragment, useMeQuery } from '@/generated/graphql';
import { useGetVideoId } from '@/utils/useGetVideoId';
import ReactPlayer from 'react-player';
import Divider from '@/ui/Divider';
import NextImage from '../NextImage';
import UnstyledLink from '@/ui/links/UnstyledLink';
import SocialLinks from '../Footer/SocialLinks';
import dayjs from 'dayjs';
import Tag from './Post/Tags/Tag';

interface PostProps {
  post: PostSnippetFragment;
}

const PostPage: React.FC<PostProps> = ({
  post: { title, url, createdAt, tags },
}) => {
  const ytId = useGetVideoId(url);
  // @todo change this author image
  const [{ data }] = useMeQuery();
  console.log('createdAt', createdAt);

  return (
    <article>
      {/* <header className='flex items-center justify-between'>
        <div className='flex'>
          <NextImage
            className='mr-4'
            width={50}
            height={50}
            imgClassName='rounded-full'
            src={data?.me?.picture as string}
          />
          <div className='flex flex-col justify-between'>
            <UnstyledLink className='mb-1' href='/about'>
              Anar Reshidov
            </UnstyledLink>
            <p className='text-gray-500'>
              {dayjs(createdAt).format('MMM D, YYYY')}
            </p>
          </div>
        </div>
        <div className='mr-2'>
          <SocialLinks />
        </div>
      </header> */}
      <section>
        <header className='mb-10 flex flex-col items-center'>
          <h1 className='my-8 text-center text-5xl text-gray-800'>{title}</h1>
          <div className='flex items-center'>
            <NextImage
              className='mr-4'
              width={32}
              height={32}
              imgClassName='rounded-full'
              src={data?.me?.picture as string}
            />

            <span className='flex font-medium text-gray-900'>
              Posted by Anar Rashidov
              <span className='flex items-center text-gray-600'>
                <div className='mx-2 h-1 w-1 rounded-full bg-gray-400'></div>
                {dayjs(createdAt).format('MMM D, YYYY')}
              </span>
            </span>
          </div>
          <div>
            {tags?.map((t) => (
              <Tag {...t} />
            ))}
          </div>
        </header>
        {/* @todo add desc */}
        <p className='my-4 text-xl leading-10 tracking-normal text-gray-900'>
          5. Gerekli Sınavlara Girmek (TOEFL & Gre vs..) Yüksek lisans ve
          doktora için amerikada hemen hemen her üniversitenin şart koştuğu iki
          sınav: TOEFL ve GRE. Avrupa için ise toefl şart, gre gerekli değil. Bu
          iki sınav ile alakalı tecrübelerimi anlatmak istiyorum, umarım
          faydalanırsınız. Gre — Bakırköy Bilge Adam (7. Ocak 2012) GRE hakkında
          konuşulacak pek birşey yok aslında. Sınav üç bölümden oluşuyor:
          Verbal, Quantitative ve Analytical Writing. Yeni sisteme göre ilk iki
          bölüm 170 üzerinden, analytical writing ise 6 üzerinden
          değerlendiriliyor. Sınavı tamamıyle bilgisayar üzerinden çözüyorsunuz,
          ilk iki bölüm test, üçüncü bölüm kompozisyon yazma (klavye kullanarak
          bilgisayara). Verbal gerçekten zor, buna çalışmak kolay değil.
          Altyapınız varsa ortalama bir skor almanız mümkün, yoksa pek
          zorlamanın alemi yok. Hayatınızda görmediğiniz göremeyeceğiniz,
          latince gibi görünen ama ingilizceymiş meğer diyeceğiniz kelimeler var
          bu bölümde. Tek tavsiyem şu olabilir: zamanınızın yettiğince verbal
          testi çözün ve gre words (http://www.majortests.com/gre/wordlist.php)
          denen şu popüler kelimeleri ezberleyin. Ben verbal kısmından 170
          üzerinden 140 civarı bir skor aldım ki bu gerçekten düşük bir skor.
          Daha yüksek almam gerekirdi, başvurduğunuz üniversitedeki admission
          yetkilileri bu kısmı birazda olsa önemsiyor. Quantitative bölümü
          gerçekten kolay. ÖSS sınavında çözdüğümüz mat-1'in aynısı. Belki daha
          kolay. Sadece kelime oyunu yapıyorlar bunlara dikkat etmeniz gerekir.
          Örneğin; paulun şu kadar parası var, elisabeth parasının üçte birini
          ona veriyor, başkası bilmem ne kadarını şuna veriyor, o başkasına
          veriyor, sonra hepsi paula, ee söyleyin bakalım paulun ilk parasının
          yarısı ne kadardır? Siz sanıyorsunuz parasını soracak, meğer parasının
          yarısını sormuş. Sanırım her bölüm 30 dakika falandı gre’de. Bu bölümü
          10 dakikada bitirebilirsiniz, ama yapmayın. Sorular öyle basit ki, tak
          tak cevaplarken dikkat hatası yapmamak elde değil. Bu bölüme
          hazırlanmak için 3–4 tane test çözdüm. Muhakkak önceden test çözmeniz
          gerekir, çünkü lisede bu konuları hep türkçe gördünüz. Örneğin bir
          ikizkenar üçgenin ingilizcesini muhtemelen bilmiyorsunuz. Dediğim
          gibi, bol bol test çözmenizi öneririm. Bu bölümden 170 üzerinden 169
          aldım. 1 puan kesintiye sebep olan hatam neydi hala çok merak ediyorum
          :D Analytical writing kısmında, 2 ya da daha fazla sayıda kompozisyon
          yazmanız bekleniyor. Sorular genelde 2 argümanı kıyaslayarak
          aralarından birini seçmeniz, bu seçiminizin avantajlarını
          dezavantajlarını bir bütünlük içerisinde, kompozisyon yazmanın
          kurallarına uyarak yazmak şeklinde. Ben kendimi bildim bileli
          kompozisyon yazamıyorum, kendi dilimde de öyle. Her insanın bu işe
          yeteneği olmak zorunda değil :D Bu bölüme gre kitabının analytical
          writing için verdiği tüyolara çalışarak hazırlandım. Bu sınava
          hazırlanırken kullandığım kitap KAPLAN yayın evinin GRE hazırlık
          kitabıydı. Bu kitabın yeterli olacağını düşünüyorum. İnternette GRE
          ile alakalı döküman bulmak çok kolay. Bu kitabın ve internetin iyi bir
          skor almak için yeterli olacağını düşünüyorum. Kitabi TOEFL
          kitaplarıyla beraber aldım, toefl kısmında nasıl temin edebileceğinizi
          anlattım.
        </p>
        {/* <Divider className='my-6' /> */}
        <ReactPlayer
          controls
          width='100%'
          height={500}
          url={`https://www.youtube.com/embed/${ytId}`}
        />
      </section>
    </article>
  );
};
export default PostPage;
