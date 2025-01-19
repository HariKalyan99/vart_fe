import React from "react";
import a from "../assets/dash.gif";
import { SiAnimalplanet } from "react-icons/si";
import { GiAnimalSkull } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { TfiControlEject } from "react-icons/tfi";
import { SiContributorcovenant } from "react-icons/si";
import { FaBirthdayCake } from "react-icons/fa";
import { FaRoute } from "react-icons/fa";
import { FaChessKing } from "react-icons/fa";
import { GiQueenCrown } from "react-icons/gi";
import { GiGoalKeeper } from "react-icons/gi";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiRead } from "react-icons/ci";
import IconButton from "@mui/material/IconButton";
import { GiPikeman } from "react-icons/gi";
import { PiPlantFill } from "react-icons/pi";
import { GiDeer } from "react-icons/gi";
import { TfiDrupal } from "react-icons/tfi";
import { GiBossKey } from "react-icons/gi";
import { TbShieldStar } from "react-icons/tb";
import { GiBorderedShield } from "react-icons/gi";
import { GiReptileTail } from "react-icons/gi"; //reptile
import { GiCrocJaws } from "react-icons/gi"; //amphi
import { GiNeedleJaws } from "react-icons/gi"; //carnivores
import { FaCrow } from "react-icons/fa"; //omni
import LightTooltip from "./utils/MUITooltip";

const DetailsCard = ({ ind }) => {
  return (
    <div className="w-full h-auto border-nostalgicblue border-4 bg-raddishpinklight rounded-xl shadow-2xl relative overflow-hidden p-2">
      <img src={a} alt="animal_photo" className="w-full h-[40%] object-cover" />

      {ind % 2 === 0 ? (
        <div className="absolute top-4 left-4 ">
          <LightTooltip title="KING" placement="top">
            <IconButton sx={{ color: "white" }}>
              <FaChessKing className=" text-nostalgicblue  text-[2rem]" />
            </IconButton>
          </LightTooltip>
        </div>
      ) : ind !== 3 ? (
        <div className="absolute top-4 left-4 ">
          <LightTooltip title="QUEEN" placement="top">
            <IconButton sx={{ color: "white" }}>
              <GiQueenCrown className=" text-nostalgicblue  text-[2rem]" />
            </IconButton>
          </LightTooltip>
        </div>
      ) : (
        <div className="absolute top-4 left-4 ">
          <LightTooltip title="KEEPER" placement="top">
            <IconButton sx={{ color: "white" }}>
              <GiPikeman className=" text-nostalgicblue  text-[2rem]" />
            </IconButton>
          </LightTooltip>
        </div>
      )}

      <div className="w-full h-[55%] relative z-[10] flex justify-between gap-2 items-start flex-col px-2 mt-2 border-4 border-chestnut p-2">
        <div className="w-full h-[40%] flex flex-col justify-between items-start ">
          <div className="flex justify-center gap-2 items-center">
            <TfiDrupal size={25} />
            <span className="text-xl font-semibold text-black">
              <span className="italic">Name:</span> Lion
            </span>
          </div>
          <div className="flex justify-center gap-2 items-center">
            <TbShieldStar size={25} />

            <span className="text-xl font-semibold text-black text-wrap">
              <span className=" italic">Role: </span> king of jungle
            </span>
          </div>
          <div className="flex justify-center gap-2 items-center">
            <PiPlantFill size={25} />

            <span className="text-xl font-semibold text-wrap">
              {" "}
              <span className=" italic">Category: </span>Herbivores
            </span>
          </div>
        </div>
        <div className="h-[40%] w-full flex gap-2 items-start ">
          <div className="flex justify-center gap-2 items-center">
            <MdEmail size={25} />

            <span className="text-xl font-semibold text-wrap">
              hello@gmail.com
            </span>
          </div>

          <div className="flex justify-center gap-2 items-center">
            <IoMdPhonePortrait size={25} />

            <span className="text-xl font-semibold text-wrap">9889988998</span>
          </div>
        </div>

        <div className="flex justify-center gap-2 items-center">
          <FaBirthdayCake size={25} />

          <span className="text-xl font-semibold text-wrap">
            <span className="">DOB: </span> 20-10-24
          </span>
        </div>

        <div className="flex justify-center gap-2 items-center">
          <FaRoute className="text-[3rem] font-bold" />

          <span className="text-xl font-semibold text-wrap">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatem, illo est ipsa, placeat ex officia alias consequuntur
            sed, unde consequatur quis quidem fuga. Consequuntur quisquam eum
            nemo doloremque. Facere deleniti omnis at quae ipsa voluptatibus
            reprehenderit ipsam culpa adipisci quibusdam saepe numquam harum,
            quia distinctio officiis explicabo vitae, modi aspernatur
            cupiditate. Doloribus aliquid ipsum ratione mollitia nesciunt
            impedit fugiat aspernatur excepturi, tenetur commodi, sed totam
            architecto adipisci ipsam vitae obcaecati aut temporibus harum ex.
            Sunt error eligendi saepe magnam quos omnis magni blanditiis minus
            aliquam consequatur perspiciatis, maxime, laborum, aliquid inventore
            ut. Culpa, dicta, quibusdam aperiam ratione esse voluptates eos a,
            cupiditate eligendi maxime blanditiis non! Facilis nulla culpa
            maiores fugiat cupiditate vel iure adipisci reiciendis, fugit
            consectetur! Magni corporis provident excepturi cumque quis
            reprehenderit, totam ullam error architecto ipsum pariatur neque cum
            nobis animi obcaecati accusamus a esse dolore sit sed sint
            voluptatibus. Est doloribus reiciendis nostrum reprehenderit. Natus
            modi, similique facilis distinctio perspiciatis repellat recusandae
            labore animi nihil ducimus eaque, eos, quibusdam tempora esse
            assumenda architecto accusamus molestias blanditiis impedit dolorum
            reprehenderit eius cum. Quos esse recusandae at. Unde at delectus
            dignissimos, quaerat totam dicta ipsa sed ducimus quos eveniet nisi
            distinctio minima, explicabo quisquam neque molestias alias numquam
            dolorem ullam eius voluptas, maiores culpa sapiente. Tempore illo
            voluptas quia perspiciatis. Deleniti illo quidem quo similique sed
            harum voluptas, ducimus soluta nostrum odit a quas repellendus
            adipisci et minima. Nesciunt, a quibusdam. Esse incidunt ab sit a
            eius, nobis maiores recusandae. Quod inventore, culpa, officia
            consequuntur ratione harum vel ex nihil at quam rerum unde
            asperiores, labore quae aperiam suscipit necessitatibus facilis.
            Adipisci necessitatibus ullam incidunt ex, quis minus ipsa iusto
            illo, dolore magni sequi aliquam obcaecati dolorum pariatur ipsum
            voluptas quia nulla maiores labore, numquam ipsam. In tenetur quam
            enim ea tempore qui minus accusantium natus error, doloremque nam
            eum voluptas adipisci eos aliquam quis? Esse nemo ullam commodi
            necessitatibus eos quis quae recusandae, ex rerum suscipit
            voluptates debitis. Consectetur dignissimos repellat cumque quae
            quas id harum, eius provident vero placeat, libero soluta dolore ab!
            Excepturi qui exercitationem doloribus itaque libero fuga neque,
            deleniti voluptatum omnis est, rem, officiis beatae quo rerum quam
            quod totam accusantium ipsa? Quisquam odit cumque perferendis?
            Impedit ipsam temporibus ratione quia necessitatibus doloribus totam
            in quaerat accusamus quod optio odit possimus dolor iure maiores
            perferendis tempora, neque suscipit repellat exercitationem eveniet?
            Aliquam tempora nisi cumque! Sequi eveniet rem eius impedit, iusto
            suscipit exercitationem consequatur sunt perspiciatis id dolor,
            nihil ducimus et, tenetur magni vero illum officia. Temporibus, odit
            sapiente. Odio quam ducimus porro repudiandae ullam veniam ab iusto
            iste facilis quos nulla praesentium voluptate voluptatibus, illum
            aliquam, suscipit quia animi laboriosam ipsa! Accusantium, nisi ea
            minus numquam quibusdam vitae saepe suscipit neque repellendus!
            Iusto facere assumenda, blanditiis dicta harum ipsa qui provident
            eaque nihil id minus atque culpa minima nisi explicabo, illum
            maiores? Aliquam asperiores ad labore sit eaque odit cumque voluptas
            at distinctio beatae modi soluta possimus corrupti suscipit eligendi
            nesciunt eum, recusandae minima aperiam atque, velit odio quas? Cum
            ipsa voluptatem magni accusamus quidem, velit earum! Quibusdam
            maxime commodi inventore iure impedit eius totam corporis tempora
            accusantium sequi repellat beatae consectetur labore facilis
            explicabo suscipit, sit asperiores quod, veniam porro id eaque odit
            illum! Praesentium reprehenderit odit numquam dignissimos minima
            laudantium est animi sit officiis. Incidunt, velit sunt ducimus unde
            nisi rem, exercitationem dicta maiores dolorem illum ipsa! Nisi,
            commodi quibusdam. Aperiam quidem laboriosam, veritatis repellendus
            voluptatibus provident, doloremque odio quo nisi reprehenderit, quis
            unde incidunt quas ipsum. Corporis odit at magni, nulla unde sequi
            asperiores ea. Necessitatibus laudantium vero, similique quisquam
            omnis quod quo nam iusto. Nesciunt corrupti voluptas quidem nam,
            veritatis incidunt et sit. Sint eligendi, officia assumenda rem
            eveniet totam blanditiis et animi veritatis dignissimos ad maxime!
            Modi repellat ab, nulla non hic atque quos pariatur fugit excepturi
            veniam asperiores maxime facilis rem possimus eos nesciunt quam
            placeat doloremque voluptas culpa dolorem natus obcaecati magni ea?
            Quasi obcaecati laudantium qui, assumenda velit, explicabo sit
            aperiam molestiae, ipsum magni ab. Sequi ea pariatur harum nemo
            iure, natus explicabo amet corrupti dolorem ratione, dicta
            recusandae veritatis repellendus porro facere ipsam. Provident
            quidem nihil, minima animi nesciunt cupiditate fugit deserunt aut id
            excepturi facere inventore sapiente corporis, repudiandae, natus
            expedita impedit? Culpa, iusto a. Odit adipisci dicta quos iusto nam
            cumque dolorem itaque ex. Tempora nostrum consequuntur cupiditate
            odit sapiente quidem eveniet a quo praesentium quae. Ab consequuntur
            error corrupti sint perspiciatis laborum eaque asperiores eius ut
            suscipit fugit eligendi rem saepe est, eum voluptatibus quos nihil!
            Optio iusto laudantium harum exercitationem et facilis delectus
            molestiae amet repellendus praesentium sed, nobis, totam, similique
            facere nesciunt corporis? Nisi, nesciunt necessitatibus architecto
            sint cumque, sapiente ducimus aliquid, atque rerum quidem maxime
            optio ex totam dolores perspiciatis ad commodi natus placeat debitis
            recusandae eos. Fugiat quos molestias itaque sit sunt perspiciatis
            laudantium. Rem laborum beatae consequuntur non quos expedita
            officiis, quae accusamus vero, maiores dolor omnis doloremque
            tempore ipsum reiciendis praesentium accusantium minima. Deleniti,
            modi consequatur expedita labore commodi vero dolor necessitatibus
            enim vitae vel veritatis omnis ut exercitationem velit quaerat
            nostrum delectus fugit blanditiis animi, in laboriosam doloribus
            ullam officia! Commodi eligendi provident perspiciatis! Dolores
            explicabo, neque placeat similique voluptatum libero, eius ab sequi
            optio blanditiis aspernatur? Ipsam mollitia impedit harum magnam
            veniam quos unde molestiae consequatur perferendis labore doloribus
            quibusdam id rem obcaecati perspiciatis, beatae molestias? Quos
            reprehenderit soluta velit facere sed libero quia ducimus dolorum
            fuga dolores sint cupiditate et vero, maiores eveniet beatae
            suscipit officia molestias nemo. Consequuntur excepturi ratione
            quidem, maiores voluptatibus perspiciatis necessitatibus amet.
            Laborum rerum assumenda officia reprehenderit omnis ullam nesciunt
            veniam. Eos iure fugit corrupti sunt, quasi nihil recusandae
            voluptates, vero natus temporibus odio aliquid dolores? Suscipit
            quisquam aut, nulla debitis tempore, tenetur impedit quod deleniti
            numquam aliquam sed in magnam explicabo illum itaque consequuntur ea
            vel amet, alias optio sapiente voluptatibus nisi. Incidunt aperiam
            totam magnam molestias necessitatibus quisquam perspiciatis a
            repellendus, possimus perferendis cum odit ratione ducimus corrupti,
            eaque inventore quidem recusandae consectetur blanditiis itaque
            reprehenderit odio iure iusto dicta. Delectus, laudantium harum!{" "}
          </span>
        </div>
        <div className="flex justify-center gap-2 items-center">
          <SiContributorcovenant size={25} />

          <span className="text-xl font-semibold text-wrap">
            Ate a lion, ran over an elephant
          </span>
        </div>
        <div className="flex justify-between w-full bg-chestnut text-white p-2">
          <span className="text-[0.8rem] font-bold">
            Registered on:{" "}
            <span className="text-base font-semibold">20th fe, 2025</span>
          </span>

          <span className="text-[0.8rem] font-bold">
            Edited on:{" "}
            <span className="text-base font-semibold">20th fe, 2025</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
