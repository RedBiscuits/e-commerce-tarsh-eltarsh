import product from "@/assets/product.png";
import { ProductCard } from "./atoms/ProductCard";
const productItem = {
  name: "Moisurising Cream",
  category: "Succulent",
  image: product,
  price: 20,
  rating: 4,
};

export const Products = () => {
  return (
    <section className="relative overflow-clip">
      <div className="flex flex-wrap items-center justify-center gap-20 z-20">
        {Array(5)
          .fill(productItem)
          .map((prod, i) => (
            <ProductCard key={i} {...prod} />
          ))}
      </div>

      {/* shapes for the background */}
      <div className="absolute top-1/2 -right-32 w-1/2 h-1/2 -z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 800 800"
          opacity="0.65"
        >
          <g stroke-width="3" stroke="hsl(356,100%,94%)" fill="none">
            <path d="M772.1322284795979 346.5319008416127C796.2244339120189 463.9798009044173 743.6658952325822 641.6921484875847 659.5664623058585 727.142303391857C575.4670293791347 812.5924582961293 468.00986957002647 797.4658232096817 368.45495043132473 756.692644382118C268.9000312926232 715.9194655545548 249.49035277100688 682.2571297220002 181.70285044009188 531.4310450195505C113.91534810917676 380.6049603171009 -32.38777446334632 109.40215904560085 43.07493924293351 32.727437810359845C118.53765294921334 -43.947283424881164 392.0369409725979 98.01645329221685 543.9238762302361 163.3923830903948C695.8108114878742 228.76831288857272 748.0400230471769 229.0840007788081 772.1322284795979 346.5319008416127C796.2244339120189 463.9798009044173 743.6658952325822 641.6921484875847 659.5664623058585 727.142303391857 "></path>
            <path d="M745.5513157798832 350.35104642184353C767.9226493957028 459.4098107658764 719.1182920505116 624.4284192359604 641.0259614756967 703.7749916470704C562.9336309008818 783.1215640581804 463.1519825067098 769.0754029064792 370.7081290207726 731.2145939951702C278.2642755348354 693.353785083861 260.241002621906 662.0959018107746 197.2954647431991 522.0431088727858C134.34992686449226 381.99031593479685 -1.502972667136305 130.15914332554678 68.56954720298069 58.96118789282298C138.64206707309768 -12.236767539900825 392.60569166624043 119.58670226883305 533.6435601197616 180.29292279571257C674.6814285732828 240.9991433225921 723.1799821640636 241.29228207781068 745.5513157798832 350.35104642184353C767.9226493957028 459.4098107658764 719.1182920505116 624.4284192359604 641.0259614756967 703.7749916470704 "></path>
            <path d="M718.9704946329031 354.1701920020744C739.6209564321211 454.8398206273355 694.5707804211754 607.164689984336 622.4855521982693 680.4076799022836C550.4003239753632 753.6506698202313 458.29418699612756 740.6849826032762 372.96139916295476 705.7365436082218C287.62861132978196 670.7881046131673 270.99174402553933 641.9346738995491 212.8881705990408 512.655172726021C154.78459717254214 383.3756715524928 29.381920681808083 150.9161276054927 94.06424671576218 85.19493797528611C158.74657274971634 19.473748345079514 393.17453391261733 141.15695124544925 523.3633355620216 197.19346250103035C653.5521372114257 253.22997375661146 698.3200328336849 253.50056337681326 718.9704946329031 354.1701920020744C739.6209564321211 454.8398206273355 694.5707804211754 607.164689984336 622.4855521982693 680.4076799022836 "></path>
            <path d="M692.3896124507667 357.9893680998832C711.3192024333832 450.2698610063726 670.0232077566828 589.9009912502897 603.9450818856857 657.0403986750752C537.8669560146884 724.1798060998605 453.43633045038905 712.2945928176518 375.21460826998066 680.2585237388517C296.99288608957227 648.2224546600518 281.74242439401655 621.7734765059018 228.48081541972613 503.2672670968343C175.21920644543576 384.7610576877669 60.266752995596164 171.67314240301675 119.55888519338748 111.42871857532737C178.8510173911788 51.18429474763798 393.7433151238381 162.72723073964357 513.0830499691252 214.09403272392626C632.4227848144124 265.46083470820895 673.46002246815 265.70887519339385 692.3896124507667 357.9893680998832C711.3192024333832 450.2698610063726 670.0232077566828 589.9009912502897 603.9450818856857 657.0403986750752 "></path>
            <path d="M665.8087302686301 361.80851368011395C683.0174484346452 445.6998708678316 645.4756350921904 572.6372619986654 585.4046115731021 633.6730869302885C525.3335880540137 694.7089118619116 448.57847390465054 683.9041725144491 377.46781737700655 654.7804733519037C306.3571608493626 625.6567741893582 292.4931047624938 601.6122485946764 244.07346024041158 493.8793309500695C195.65381571832938 386.1464133054626 91.1515853093843 192.43012668296268 145.05352367101278 137.6624686577905C198.9554620326412 82.89481063261837 394.31209633505875 184.29747971625983 502.8027643762289 230.99457242924404C611.2934324173991 277.6916651422283 648.6000121026151 277.91715649239643 665.8087302686301 361.80851368011395C683.0174484346452 445.6998708678316 645.4756350921904 572.6372619986654 585.4046115731021 633.6730869302885 "></path>
            <path d="M639.2278633452828 365.6276592603448C654.7157096946963 441.1298807292907 620.9280776864871 555.373532747041 566.8641565193075 610.305775185502C512.8002353521279 665.2380176239626 443.7206326177011 655.5137522112464 379.7210417428215 629.3024229649554C315.72145086794194 603.0910937186646 303.24380038976 581.451020683451 259.66612031988603 484.49139480330484C216.08844025001207 387.53176892315867 122.0364328819615 213.1871109629086 170.5481774074271 163.89621874025363C219.05992193289273 114.60532651759871 394.88089280506847 205.86772869287603 492.5224940421217 247.89511213456183C590.1640952791747 289.9224955762477 623.7400169958692 290.125437791399 639.2278633452828 365.6276592603448C654.7157096946963 441.1298807292907 620.9280776864871 555.373532747041 566.8641565193075 610.305775185502 "></path>
            <path d="M612.6469811631463 369.44678958178656C626.4139556959584 436.5598753319606 596.3805050219945 538.1097882366277 548.3236862067238 586.9384481819261C500.26686739145316 635.7671081272244 438.86277607196257 627.1233166492545 381.9742508498475 603.8243573192183C325.08572562773224 580.5253979891819 313.9944807582372 561.2897775134364 275.2587651405714 475.1034433977509C236.5230495229057 388.91710928206544 152.92126519574964 233.9440799840654 196.0428158850524 190.1299535639277C239.16436657435514 146.31582714379 395.44967401628924 227.43796241070316 482.24220844922525 264.79563658109055C569.0347428821615 302.15331075147793 598.8800066303343 302.33370383161247 612.6469811631463 369.44678958178656C626.4139556959584 436.5598753319606 596.3805050219945 538.1097882366277 548.3236862067238 586.9384481819261 "></path>
            <path d="M586.0660989810099 373.2659809383845C598.1122016972204 431.98993096978677 571.832932357502 520.8461047613705 529.7832158941402 563.5711822135066C487.73349943077824 606.2962596656428 434.00491952622417 598.732942122419 384.2274599568733 578.3463527086371C334.45000038752255 557.9597632948555 324.7451611267144 541.1285953785782 290.8514099612569 465.7155530273534C256.9576587957993 390.3025106761286 183.80609750953778 254.70111004037858 221.5374543626777 216.36374942275802C259.2688112158176 178.02638880513751 396.0184552275099 249.00825716368655 471.961922856329 281.6962220627755C547.905390485148 314.3841869618645 574.0199962647994 314.5420309069822 586.0660989810099 373.2659809383845C598.1122016972204 431.98993096978677 571.832932357502 520.8461047613705 529.7832158941402 563.5711822135066 "></path>
            <path d="M559.4852625752405 377.08511125982625C569.8104934748496 427.4199255724568 547.2854054693768 503.582360250957 511.2427913579237 540.2038552099309C475.20017724647073 576.8253501689047 429.14710875685284 570.3425065604272 386.48071484026644 552.8682870629C343.81432092368004 535.3940675653728 335.49588727155873 520.9673522085636 306.44410055830946 456.32760162179954C277.39231384506013 391.68785103503546 214.6909755996931 275.4580790615354 247.03213861667018 242.59748424643215C279.3733016336472 209.73688943132885 396.58728221509773 270.5784908815137 461.68168303979985 298.59674650930424C526.776083864502 326.6150021370948 549.1600316756314 326.7502969471957 559.4852625752405 377.08511125982625C569.8104934748496 427.4199255724568 547.2854054693768 503.582360250957 511.2427913579237 540.2038552099309 "></path>
            <path d="M532.9043803931041 380.90427209884604C541.5087394761117 422.84995069270485 522.7378328048842 486.3186462581218 492.7023210453401 516.8365587239333C462.6668092857959 547.3544711897448 424.28925221111433 541.9521015160136 388.73392394729234 527.390251934741C353.17859568347035 512.8284023534682 346.24656764003595 500.8061395561273 322.03674537899485 446.9396807338238C297.82692311795375 393.07322191152036 245.57580791348124 296.2150786002704 272.5267770942954 268.83124958768434C299.47774627510967 241.44742057509825 397.15606342631844 292.14875511691895 451.4013974469035 315.4973014734111C505.6467314674886 338.8458478299032 524.3000213100966 338.9585935049873 532.9043803931041 380.90427209884604C541.5087394761117 422.84995069270485 522.7378328048842 486.3186462581218 492.7023210453401 516.8365587239333 "></path>
            <path d="M506.3234982109677 384.7234024202878C513.2069854773738 418.27994529537483 498.19026014039173 469.0549017477083 474.1618507327564 493.4692317203576C450.1334413251211 517.8835616930068 419.4313956653758 513.5616659540218 390.9871330543183 501.91218628900367C362.54287044326065 490.2627066239854 356.9972480085131 480.6448963861128 337.62939019968024 437.55172932826997C318.2615323908474 394.45856227042725 276.4606402272693 316.97204762142724 298.0214155719207 295.0649844113584C319.58219091657213 273.1579212012895 397.72484463753915 313.71898883474614 441.12111185400715 332.3978259199398C484.5173790704753 351.07666300513347 499.44001094456166 351.16685954520074 506.3234982109677 384.7234024202878C513.2069854773738 418.27994529537483 498.19026014039173 469.0549017477083 474.1618507327564 493.4692317203576 "></path>
            <path d="M479.7426160288312 388.54256325930766C484.90523147863576 413.70997041562293 473.6426874758993 451.791187754873 455.6213804201728 470.10193523436C437.6000733644463 488.41268271384683 414.57353911963736 485.1712609096081 393.2403421613442 476.4341511608445C371.90714520305096 467.6970414120809 367.74792837699033 460.48368373367634 353.22203502036564 428.1638084402943C338.696141663741 395.84393314691226 307.34547254105746 337.7290471601622 323.516054049546 321.2987497526106C339.68663555803454 304.8684523450589 398.2936258487598 335.2892530701514 430.84082626111086 349.29838088404665C463.3880266734619 363.3075086979419 474.58000057902666 363.3751561029924 479.7426160288312 388.54256325930766C484.90523147863576 413.70997041562293 473.6426874758993 451.791187754873 455.6213804201728 470.10193523436 "></path>
            <path d="M453.16174910548386 392.3616935807494C456.6034927386869 409.13996501829286 449.09513007019586 434.5274432444596 437.0809253663782 446.73460823078426C425.06672066256056 458.94177321710885 409.7156978326879 456.78082534761637 395.49356652715915 450.9560855151073C381.2714352216303 445.1313456825982 378.49862400425656 440.32244056366187 368.81469509984015 418.77585703474045C359.1307661954237 397.2292735058191 338.23032011363466 358.4860161813191 349.0107077859604 347.5324845762847C359.79109545828607 336.57895297125026 398.8624223187696 356.85948678797854 420.5605559270036 366.19890533057537C442.25868953523764 375.5383238731722 449.72000547228083 375.58342214320584 453.16174910548386 392.3616935807494C456.6034927386869 409.13996501829286 449.09513007019586 434.5274432444596 437.0809253663782 446.73460823078426 "></path>
            <path d="M426.58088218213646 396.1808544197692C428.301753998738 404.56999013854096 424.54757266449246 417.26372925162434 418.54047031258364 423.36731174478666C412.5333679606748 429.470894237949 404.8578565457385 428.39042030320275 397.7467908929741 425.47805038694815C390.6357252402097 422.5656804706936 389.24931963152284 420.16122791122547 384.4073551793146 409.3879361467648C379.5653907271064 398.6146443823041 369.11516768621186 379.2430157200541 374.5053615223747 373.76624991753687C379.89555535853754 368.28948411501966 399.4312187887793 378.4297510233838 410.28028559289635 383.0994602946822C421.12935239701335 387.76916956598063 424.86001036553495 387.7917187009975 426.58088218213646 396.1808544197692C428.301753998738 404.56999013854096 424.54757266449246 417.26372925162434 418.54047031258364 423.36731174478666 "></path>
          </g>
        </svg>
      </div>
      <div className="absolute top-1/3 -left-32 w-1/2 h-1/2 -z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 800 800"
          opacity="0.35"
        >
          <g stroke-width="3" stroke="hsl(356,100%,94%)" fill="none">
            <path d="M767.3614601662089 167.2682793815111C821.0002869825148 296.1471627218258 658.8827793468869 589.3754844478331 569.3947813892337 696.514592782779C479.9067834315804 803.653701117725 451.82818278165996 734.8855735089201 337.81906996947384 681.5359993892511C223.80995715728773 628.1864252695821 27.544926827930112 566.1949800583652 22.15103989074072 440.4366370083685C16.75715295355127 314.6782939583719 156.67624178024198 134.80602725486335 311.9284126709647 77.89595274926785C467.1805835616873 20.985878243672403 713.7226333499025 38.38939604119645 767.3614601662089 167.2682793815111C821.0002869825148 296.1471627218258 658.8827793468869 589.3754844478331 569.3947813892337 696.514592782779 "></path>
            <path d="M741.1213602282764 183.8919933298463C790.9288422719892 303.5652421458527 640.3911566103346 575.8486837485739 557.2951585067996 675.3349986310236C474.1991604032644 774.8213135134733 448.1261740854811 710.9651950195831 342.26056933130826 661.4263047656049C236.3949645771355 611.8874145116265 54.14886498558917 554.3239296726395 49.14025568677039 437.5483254119281C44.131646387951605 320.77272115121696 174.0565145841644 153.74847349795903 318.2192446969783 100.90340431419179C462.38197480979215 48.05833513042455 691.3138781845635 64.21874451383974 741.1213602282764 183.8919933298463C790.9288422719892 303.5652421458527 640.3911566103346 575.8486837485739 557.2951585067996 675.3349986310236 "></path>
            <path d="M714.881260290344 200.51567676060324C760.8573975614636 310.9832910523015 621.8995338737825 562.3218525317363 545.1955356243654 654.1553739616901C468.4915373749484 745.9888953916437 444.4241653893023 687.044786012668 346.7020686931428 641.3165796243804C248.9799719969833 595.5883732360928 80.75280314324817 542.4528487693353 76.12947148280006 434.65998329790966C71.506139822352 326.867117826484 191.43678738808683 172.69088922347657 324.5100767229919 123.9108253615376C457.58336605789714 75.13076149959863 668.9051230192244 90.04806246890496 714.881260290344 200.51567676060324C760.8573975614636 310.9832910523015 621.8995338737825 562.3218525317363 545.1955356243654 654.1553739616901 "></path>
            <path d="M688.6411298348336 217.13936019136025C730.78592233336 318.4013399587503 603.4078806196522 548.7950213148989 533.0958822243531 632.9757492923565C462.78388382905416 717.156477269814 440.7221261755453 663.124377005753 351.1435375373991 621.2068544831559C261.56494889925284 579.2893319605589 107.35671078332905 530.5817678660313 103.1186567612516 431.7716411838911C98.88060273917421 332.9615145017509 208.81702967443118 191.63330494899418 330.80087823142753 146.91824640888342C452.784726788424 102.20318786877272 646.4963373363073 115.87738042397018 688.6411298348336 217.13936019136025C730.78592233336 318.4013399587503 603.4078806196522 548.7950213148989 533.0958822243531 632.9757492923565 "></path>
            <path d="M662.4010604144794 233.76305888090639C700.7145081404124 325.8194041239883 584.9162884006781 535.2682053568506 520.9962898594972 611.796139881812C457.0762913183163 688.3240744067734 437.0201479969446 639.203983257627 355.5850674168116 601.0971446007206C274.14998683667875 562.9903059438143 133.96067945856618 518.7107022215164 130.10790307485945 428.88331432866175C126.25512669115267 339.0559264358069 226.1973329959318 210.5757359333008 337.0917407750194 169.92568271501835C447.986148554107 129.27562949673586 624.0876126885464 141.70671363782446 662.4010604144794 233.76305888090639C700.7145081404124 325.8194041239883 584.9162884006781 535.2682053568506 520.9962898594972 611.796139881812 "></path>
            <path d="M636.1609299589691 250.38675757045246C670.6430329123086 333.2374682892262 566.4246351465479 521.7413893988023 508.89663645948497 590.6165304712675C451.3686377724222 659.4916715437328 433.31810878318765 615.2835895095011 360.02653626106803 580.9874347182853C286.7349637389484 546.6912799270696 160.56458709864705 506.83963657700156 157.097088353311 425.9949874734323C153.62958960797494 345.150338369863 243.5775752822761 229.51816691760746 343.3825422834549 192.93311902115323C443.18750928463373 156.348071124699 601.6788270056293 167.53604685167875 636.1609299589691 250.38675757045246C670.6430329123086 333.2374682892262 566.4246351465479 521.7413893988023 508.89663645948497 590.6165304712675 "></path>
            <path d="M609.9208147622476 267.01045625999853C640.571572942994 340.65553245446404 547.9329971512066 508.21457344075395 496.7969983182618 569.4369210607231C445.660999485317 630.6592686806922 429.61608482821975 591.3631957613751 364.4680203641134 560.87772483585C299.3199559000071 530.3922539103248 187.168509997517 494.9685709324866 184.0862888905516 423.1066606182028C181.0040677835862 351.244750303919 260.95783282740945 248.46059790191407 349.67335905067955 215.9405553272881C438.38888527394965 183.4205127526621 579.2700565815012 193.36538006553303 609.9208147622476 267.01045625999853C640.571572942994 340.65553245446404 547.9329971512066 508.21457344075395 496.7969983182618 569.4369210607231 "></path>
            <path d="M583.6807148243154 283.63413969075555C610.5001282324683 348.0735813609129 529.4413744146543 494.68774222391653 484.6973754358278 548.2572963913894C439.9533764570011 601.8268505588625 425.9140761320409 567.44278675446 368.90951972594786 540.7679996946256C311.9049633198548 514.093212634791 213.772448155176 483.0974900291826 211.07550468658127 420.21831850418425C208.37856121798654 357.33914697918595 278.3381056313319 267.4030136274317 355.9641910766933 238.94797637463392C433.59027652205464 210.49293912183617 556.8613014161622 219.1946980205982 583.6807148243154 283.63413969075555C610.5001282324683 348.0735813609129 529.4413744146543 494.68774222391653 484.6973754358278 548.2572963913894 "></path>
            <path d="M557.440630145172 300.25782312151256C580.4286987807318 355.4916302673617 510.94976693689125 481.1609110070791 472.5977678121827 527.077671722056C434.2457686874742 572.9944324370329 422.21208269465114 543.522377747545 373.3510343465714 520.6582745534012C324.48998599849165 497.79417135925735 240.37640157162406 471.2264091258786 238.06473574140006 417.32997639016577C235.753069911176 363.43354365445293 295.7183936940434 286.3454293529492 362.25503836149596 261.95539742197974C428.79168302894857 237.56536549101025 534.4525615096122 245.02401597566342 557.440630145172 300.25782312151256C580.4286987807318 355.4916302673617 510.94976693689125 481.1609110070791 472.5977678121827 527.077671722056 "></path>
            <path d="M531.2005149484506 316.8815370698477C550.3572388114171 362.9097096913887 492.45812894155006 467.6341103078198 460.49812967095954 505.89807757030053C428.5381304003691 544.1620448327812 418.51005873968325 519.601999258208 377.79251844961675 500.54857992975485C337.0749781595503 481.4951606013017 266.980324470494 459.3553587401527 265.05393627864066 414.4416647937254C263.1275480867873 369.527970847298 313.09865123917683 305.28787559604496 368.54585512872063 284.9628489869037C423.99305901826443 264.63782237776246 512.0437910854841 270.85336444830676 531.2005149484506 316.8815370698477C550.3572388114171 362.9097096913887 492.45812894155006 467.6341103078198 460.49812967095954 505.89807757030053 "></path>
            <path d="M504.9604150105183 333.50522050060476C520.2857941008915 370.3277585978375 473.9665062049978 454.10727909098244 448.3985067885254 484.718452900967C422.83050737205303 515.3296267109515 414.8080500435044 495.6815902512931 382.2340178114512 480.43885478853053C349.65998557939804 465.1961193257679 293.58426262815306 447.4842778368488 292.04315207467033 411.55332267970687C290.5020415211876 375.62236752256496 330.47892404309925 324.2302913215625 374.8366871547343 307.9702700342495C419.19445026636936 291.71024874693654 489.6350359201451 296.682682403372 504.9604150105183 333.50522050060476C520.2857941008915 370.3277585978375 473.9665062049978 454.10727909098244 448.3985067885254 484.718452900967 "></path>
            <path d="M478.72029981379694 350.1289344489399C490.21433413157683 377.7458380218644 455.47486820965656 440.58047839172315 436.2988686473023 463.5388587492116C417.12286908494804 486.4972391067 411.1060260885365 471.7612117619561 386.67550191449664 460.3291601648842C362.24497774045676 448.89710856781227 320.188185527023 435.6132274511229 319.03235261191094 408.66501108326645C317.87651969679894 381.71679471541006 347.8591815882327 343.17273756465823 381.1275039219589 330.9777215991735C414.3958262556852 318.78270563368875 467.22626549601705 322.51203087601533 478.72029981379694 350.1289344489399C490.21433413157683 377.7458380218644 455.47486820965656 440.58047839172315 436.2988686473023 463.5388587492116 "></path>
            <path d="M452.4802151346537 366.7526178796969C460.1429046798403 385.1638869283133 436.98326073189344 427.0536471748858 424.19926102365724 442.35923407987804C411.41526131542105 457.6648209848703 407.40403265114674 447.84080275504107 391.1170165351201 440.2194350236598C374.83000041909355 432.5980672922785 346.79213894347106 423.74214654781895 346.0215836667297 405.77666896924796C345.25102838998833 387.81119139067704 365.23946965094416 362.1151532901758 387.4183512067617 353.9851426465193C409.5972327625792 345.8551320028628 444.8175255894671 348.3413488310805 452.4802151346537 366.7526178796969C460.1429046798403 385.1638869283133 436.98326073189344 427.0536471748858 424.19926102365724 442.35923407987804 "></path>
            <path d="M426.2400999379323 383.3763013104539C430.0714447105256 392.58193583476213 418.4916227365522 413.52681595804836 412.0996228824341 421.17960941054446C405.707623028316 428.8324028630406 403.70200869617884 423.920393748126 395.5585006381655 420.10970988243537C387.4149925801523 416.29902601674473 373.396061842341 411.87106564451494 373.01078420397033 402.8883268552295C372.62550656559966 393.90558806594396 382.6197271960776 381.0575690156934 393.7091679739863 376.9925636938651C404.7986087518951 372.92755837203686 422.408755165339 374.1706667861457 426.2400999379323 383.3763013104539C430.0714447105256 392.58193583476213 418.4916227365522 413.52681595804836 412.0996228824341 421.17960941054446 "></path>
          </g>
        </svg>
      </div>
    </section>
  );
};