import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Stack } from "components/Stack";
import { Line } from "components/Line";
import { List } from "components/List";
import { Input } from "components/Input";
import { Button } from "components/Button";

const AboutPage = () => {
  return (
    <>
      <Column
        className="bg-gray_50 font-poppins items-start justify-start mx-[auto] w-[100%]"
        compId="1074:188"
        comWidth={1920}
        comHeight={3576}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <header
          className="w-[100%]"
          compId="128"
          comWidth={1920}
          comHeight={180}
          compLeft={0}
          compRight={0}
          compType="Header"
        >
          <Column
            className="w-[100%]"
            compId="1074:428"
            comWidth={1920}
            comHeight={180}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-center justify-between w-[100%]"
              compId="1074:441"
              comWidth={1920}
              comHeight={60}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Image
                src={"images/img_sosmedia_3.svg"}
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18px] object-contain w-[10%]"
                compId="1074:454"
                comWidth={192}
                comHeight={24}
                compLeft={160}
                compRight={0}
                compType="Image"
                alt="sosmedia"
              />
              <Row
                className="items-center justify-center xl:mb-[10px] 3xl:mb-[14px] mb-[16px] xl:mr-[112px] 2xl:mr-[126px] 3xl:mr-[151px] mr-[168px] lg:mr-[98px] xl:mt-[11px] 3xl:mt-[15px] mt-[17px] 2xl:my-[12px] lg:my-[9px] w-[30%]"
                compId="793"
                comWidth={575}
                comHeight={27}
                compLeft={0}
                compRight={168}
                compType="Row"
              >
                <Row
                  className="items-center justify-start w-[30%]"
                  compId="1074:442"
                  comWidth={172}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_call_4.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="1074:443"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Call"
                  />
                  <Text
                    className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[77%]"
                    compId="1074:445"
                    comWidth={132}
                    comHeight={27}
                    compLeft={16}
                    compRight={0}
                    compType="Text"
                  >{`+12 345 6789 0`}</Text>
                </Row>
                <Row
                  className="items-center justify-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[39%]"
                  compId="1074:446"
                  comWidth={223}
                  comHeight={27}
                  compLeft={32}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_email_4.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="1074:447"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Email"
                  />
                  <Text
                    className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[82%]"
                    compId="1074:449"
                    comWidth={183}
                    comHeight={27}
                    compLeft={16}
                    compRight={0}
                    compType="Text"
                  >{`support@tronix.com`}</Text>
                </Row>
                <Row
                  className="items-center justify-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[20%]"
                  compId="1074:450"
                  comWidth={116}
                  comHeight={27}
                  compLeft={32}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_user.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="1074:451"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="User"
                  />
                  <Text
                    className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[66%]"
                    compId="1074:453"
                    comWidth={76}
                    comHeight={27}
                    compLeft={16}
                    compRight={0}
                    compType="Text"
                  >{`Account`}</Text>
                </Row>
              </Row>
            </Row>
            <Stack
              className="3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] w-[100%]"
              compId="788"
              comWidth={1920}
              comHeight={120}
              compLeft={0}
              compRight={0}
              compType="Stack"
            >
              <Column
                className="absolute inset-[0] items-center justify-start rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] w-[100%]"
                compId="774"
                comWidth={1920}
                comHeight={120}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Line
                  className="bg-gray_500 h-[1px] mx-[auto] opacity-op25 w-[83%]"
                  compId="1074:438"
                  comWidth={1598}
                  comHeight={1}
                  compLeft={10}
                  compRight={10}
                  compType="Line"
                />
                <Row
                  className="items-start justify-start lg:my-[18px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[28px] my-[32px] w-[100%]"
                  compId="773"
                  comWidth={1920}
                  comHeight={55}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-semibold xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] mt-[1px] text-deep_orange_400 lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left w-[6%]"
                    compId="1074:431"
                    comWidth={112}
                    comHeight={54}
                    compLeft={160}
                    compRight={0}
                    compType="Text"
                  >{`Tronix`}</Text>
                  <Stack
                    className="lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] h-[44px] mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] 2xl:ml-[1044px] 3xl:ml-[1253px] ml-[1392px] lg:ml-[812px] xl:ml-[928px] lg:w-[25px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px] w-[44px]"
                    compId="790"
                    comWidth={44}
                    comHeight={44}
                    compLeft={1392}
                    compRight={0}
                    compType="Stack"
                  >
                    <Image
                      src={"images/img_shoppingbag_2.svg"}
                      className="absolute bottom-[0] lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] left-[0] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                      compId="1074:432"
                      comWidth={32}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="ShoppingBag"
                    />
                    <Column
                      className="absolute bg-deep_orange_400 lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] items-center justify-start lg:py-[1px] 3xl:py-[2px] 2xl:py-[2px] xl:py-[2px] py-[3px] right-[0] rounded-radius50 top-[0] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="127"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mx-[auto] not-italic 3xl:text-fs10 text-fs12 lg:text-fs7 xl:text-fs8 2xl:text-fs9 text-gray_50 text-left w-[67%]"
                        compId="1074:437"
                        comWidth={16}
                        comHeight={18}
                        compLeft={4}
                        compRight={4}
                        compType="Text"
                      >{`99`}</Text>
                    </Column>
                  </Stack>
                  <Image
                    src={"images/img_email_5.svg"}
                    className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[20px] 3xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                    compId="1074:434"
                    comWidth={32}
                    comHeight={32}
                    compLeft={20}
                    compRight={0}
                    compType="Image"
                    alt="Email"
                  />
                </Row>
              </Column>
              <Row
                className="absolute h-[max-content] inset-y-[0] items-center justify-center my-[auto] right-[18%] w-[59%]"
                compId="1074:463"
                comWidth={1137}
                comHeight={48}
                compLeft={0}
                compRight={351}
                compType="Row"
              >
                <Row
                  className="items-center justify-between mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:my-[9px] w-[42%]"
                  compId="794"
                  comWidth={473}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="cursor-pointer hover:font-normal font-normal font-poppins not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[11%]"
                    compId="1074:464"
                    comWidth={54}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Home`}</Text>
                  <Text
                    className="cursor-pointer hover:font-normal font-normal font-poppins not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[11%]"
                    compId="1074:465"
                    comWidth={54}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`About`}</Text>
                  <Text
                    className="cursor-pointer hover:font-normal font-normal font-poppins not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[15%]"
                    compId="1074:466"
                    comWidth={70}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Product`}</Text>
                  <Text
                    className="cursor-pointer hover:font-normal font-normal font-poppins not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[8%]"
                    compId="1074:467"
                    comWidth={40}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Blog`}</Text>
                  <Text
                    className="cursor-pointer hover:font-normal font-normal font-nunitosans my-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[13%]"
                    compId="1074:468"
                    comWidth={63}
                    comHeight={25}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Contact`}</Text>
                </Row>
                <Row
                  className="bg-bluegray_100_3f items-center justify-between 3xl:ml-[108px] ml-[120px] lg:ml-[70px] xl:ml-[80px] 2xl:ml-[90px] rounded-radius8 w-[48%]"
                  compId="775"
                  comWidth={544}
                  comHeight={48}
                  compLeft={120}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-normal mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:my-[9px] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 w-[20%]"
                    compId="1074:471"
                    comWidth={109}
                    comHeight={27}
                    compLeft={32}
                    compRight={0}
                    compType="Text"
                  >{`Search here`}</Text>
                  <Image
                    src={"images/img_search_1.svg"}
                    className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] object-contain rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                    compId="1074:472"
                    comWidth={48}
                    comHeight={48}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="search"
                  />
                </Row>
              </Row>
            </Stack>
          </Column>
        </header>
        <Column
          className="items-start lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] w-[100%]"
          compId="795"
          comWidth={1920}
          comHeight={27}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Row
            className="items-center justify-start xl:mx-[106px] 2xl:mx-[120px] 3xl:mx-[144px] mx-[160px] lg:mx-[93px] w-[8%]"
            compId="1074:424"
            comWidth={152}
            comHeight={27}
            compLeft={160}
            compRight={160}
            compType="Row"
          >
            <Text
              className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[36%]"
              compId="1074:425"
              comWidth={54}
              comHeight={27}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`Home`}</Text>
            <Text
              className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[7%]"
              compId="1074:426"
              comWidth={11}
              comHeight={27}
              compLeft={16}
              compRight={0}
              compType="Text"
            >{`>`}</Text>
            <Text
              className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] text-deep_orange_400 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[36%]"
              compId="1074:427"
              comWidth={55}
              comHeight={27}
              compLeft={16}
              compRight={0}
              compType="Text"
            >{`About`}</Text>
          </Row>
        </Column>
        <Column
          className="items-center justify-start lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] mx-[auto] w-[55%]"
          compId="1089:2"
          comWidth={1056}
          comHeight={199}
          compLeft={160}
          compRight={160}
          compType="Column"
        >
          <Text
            className="font-bold font-montserrat mx-[auto] lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_800 text-left w-[31%]"
            compId="1074:422"
            comWidth={326}
            comHeight={59}
            compLeft={10}
            compRight={10}
            compType="Text"
          >{`About Tronix`}</Text>
          <Text
            className="font-normal font-poppins leading-lh lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[100%]"
            compId="1074:479"
            comWidth={1056}
            comHeight={108}
            compLeft={0}
            compRight={0}
            compType="Text"
          >{`We are here to provide a place special for electronic devices. Although we only operated for 2 years but we always provide the best service for customers and all the sellers who use our website. With the hope that it can help improve a better life using various electronic goods with the latest technology, we are all ears to any suggestion from our dear customers`}</Text>
        </Column>
        <Image
          src={"images/img_image_15.svg"}
          className="lg:h-[350px] xl:h-[401px] 2xl:h-[451px] 3xl:h-[541px] h-[600px] lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] mx-[auto] object-contain w-[83%]"
          compId="1074:483"
          comWidth={1597}
          comHeight={600}
          compLeft={160}
          compRight={160}
          compType="Image"
          alt="image"
        />
        <Column
          className="font-montserrat items-center justify-start xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] mx-[auto] w-[83%]"
          compId="1074:487"
          comWidth={1600}
          comHeight={343}
          compLeft={160}
          compRight={160}
          compType="Column"
        >
          <Text
            className="font-bold mx-[auto] lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_800 text-left w-[28%]"
            compId="1074:488"
            comWidth={447}
            comHeight={59}
            compLeft={10}
            compRight={10}
            compType="Text"
          >{`Why Choosing Us`}</Text>
          <List
            className="font-poppins lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-4 min-h-[auto] lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[100%]"
            compId="1074:668"
            comWidth={1600}
            comHeight={204}
            compLeft={0}
            compRight={0}
            compType="List"
            orientation="horizontal"
          >
            <Column
              className="items-center justify-start w-[100%]"
              compId="1074:490"
              comWidth={376}
              comHeight={204}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Image
                src={"images/img_quality.svg"}
                className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] mx-[auto] object-contain lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                compId="1074:491"
                comWidth={64}
                comHeight={64}
                compLeft={10}
                compRight={10}
                compType="Image"
                alt="Quality"
              />
              <Column
                className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[93%]"
                compId="1074:494"
                comWidth={349}
                comHeight={108}
                compLeft={10}
                compRight={10}
                compType="Column"
              >
                <Text
                  className="font-medium mx-[auto] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[35%]"
                  compId="1074:495"
                  comWidth={123}
                  comHeight={36}
                  compLeft={10}
                  compRight={10}
                  compType="Text"
                >{`54 Brands`}</Text>
                <Text
                  className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 w-[100%]"
                  compId="1074:496"
                  comWidth={349}
                  comHeight={64}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.`}</Text>
              </Column>
            </Column>
            <Column
              className="items-center justify-start w-[100%]"
              compId="1074:497"
              comWidth={376}
              comHeight={204}
              compLeft={32}
              compRight={0}
              compType="Column"
            >
              <Image
                src={"images/img_fastdelivery.svg"}
                className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] mx-[auto] object-contain lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                compId="1074:498"
                comWidth={64}
                comHeight={64}
                compLeft={10}
                compRight={10}
                compType="Image"
                alt="FastDelivery"
              />
              <Column
                className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[93%]"
                compId="1074:502"
                comWidth={349}
                comHeight={108}
                compLeft={10}
                compRight={10}
                compType="Column"
              >
                <Text
                  className="font-medium mx-[auto] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[46%]"
                  compId="1074:503"
                  comWidth={160}
                  comHeight={36}
                  compLeft={10}
                  compRight={10}
                  compType="Text"
                >{`Fast Delivery`}</Text>
                <Text
                  className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 w-[100%]"
                  compId="1074:504"
                  comWidth={349}
                  comHeight={64}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.`}</Text>
              </Column>
            </Column>
            <Column
              className="items-center justify-start w-[100%]"
              compId="1074:505"
              comWidth={376}
              comHeight={204}
              compLeft={32}
              compRight={0}
              compType="Column"
            >
              <Image
                src={"images/img_cashondeliver.svg"}
                className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] mx-[auto] object-contain lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                compId="1074:506"
                comWidth={64}
                comHeight={64}
                compLeft={10}
                compRight={10}
                compType="Image"
                alt="CashOnDeliver"
              />
              <Column
                className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[93%]"
                compId="1074:518"
                comWidth={349}
                comHeight={108}
                compLeft={10}
                compRight={10}
                compType="Column"
              >
                <Text
                  className="font-medium mx-[auto] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[43%]"
                  compId="1074:519"
                  comWidth={149}
                  comHeight={36}
                  compLeft={10}
                  compRight={10}
                  compType="Text"
                >{`COD Service`}</Text>
                <Text
                  className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 w-[100%]"
                  compId="1074:520"
                  comWidth={349}
                  comHeight={64}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.`}</Text>
              </Column>
            </Column>
            <Column
              className="items-center justify-start w-[100%]"
              compId="1074:521"
              comWidth={376}
              comHeight={204}
              compLeft={32}
              compRight={0}
              compType="Column"
            >
              <Image
                src={"images/img_quality_1.svg"}
                className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] mx-[auto] object-contain lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                compId="1074:522"
                comWidth={64}
                comHeight={64}
                compLeft={10}
                compRight={10}
                compType="Image"
                alt="Quality"
              />
              <Column
                className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[93%]"
                compId="1074:527"
                comWidth={349}
                comHeight={108}
                compLeft={10}
                compRight={10}
                compType="Column"
              >
                <Text
                  className="font-medium mx-[auto] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[78%]"
                  compId="1074:528"
                  comWidth={273}
                  comHeight={36}
                  compLeft={10}
                  compRight={10}
                  compType="Text"
                >{`100% Original Products`}</Text>
                <Text
                  className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 w-[100%]"
                  compId="1074:529"
                  comWidth={349}
                  comHeight={64}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.`}</Text>
              </Column>
            </Column>
          </List>
        </Column>
        <Column
          className="items-center justify-start xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] mx-[auto] w-[83%]"
          compId="1074:667"
          comWidth={1600}
          comHeight={741}
          compLeft={160}
          compRight={160}
          compType="Column"
        >
          <Text
            className="font-bold font-montserrat mx-[auto] lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_800 text-left w-[15%]"
            compId="1074:601"
            comWidth={245}
            comHeight={59}
            compLeft={10}
            compRight={10}
            compType="Text"
          >{`Our Team`}</Text>
          <Text
            className="font-normal font-poppins leading-lh lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 w-[39%]"
            compId="1074:602"
            comWidth={626}
            comHeight={54}
            compLeft={10}
            compRight={10}
            compType="Text"
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.`}</Text>
          <List
            className="font-poppins lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-4 min-h-[auto] lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[100%]"
            compId="1074:666"
            comWidth={1600}
            comHeight={516}
            compLeft={0}
            compRight={0}
            compType="List"
            orientation="horizontal"
          >
            <Column
              className="shadow-bs w-[100%]"
              compId="1074:609"
              comWidth={376}
              comHeight={516}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <div
                className="bg-gray_400 lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] h-[376px] mx-[auto] rounded-radius16 lg:w-[219px] xl:w-[250px] 2xl:w-[282px] 3xl:w-[338px] w-[376px]"
                compId="1074:612"
                comWidth={376}
                comHeight={376}
                compLeft={0}
                compRight={0}
                compType="View"
              ></div>
              <Column
                className="bg-gray_50 items-center justify-center lg:py-[20px] xl:py-[23px] 2xl:py-[25px] 3xl:py-[31px] py-[34.5px] rounded-radius16 w-[100%]"
                compId="782"
                comWidth={376}
                comHeight={140}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-medium mx-[auto] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[47%]"
                  compId="1074:615"
                  comWidth={175}
                  comHeight={36}
                  compLeft={10}
                  compRight={10}
                  compType="Text"
                >{`Sam Alabama`}</Text>
                <Text
                  className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[35%]"
                  compId="1074:616"
                  comWidth={132}
                  comHeight={27}
                  compLeft={10}
                  compRight={10}
                  compType="Text"
                >{`Team Member`}</Text>
              </Column>
            </Column>
            <Column
              className="shadow-bs w-[100%]"
              compId="1074:645"
              comWidth={376}
              comHeight={516}
              compLeft={32}
              compRight={0}
              compType="Column"
            >
              <div
                className="bg-gray_400 lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] h-[376px] mx-[auto] rounded-radius16 lg:w-[219px] xl:w-[250px] 2xl:w-[282px] 3xl:w-[338px] w-[376px]"
                compId="1074:648"
                comWidth={376}
                comHeight={376}
                compLeft={0}
                compRight={0}
                compType="View"
              ></div>
              <Column
                className="bg-gray_50 items-center justify-center lg:py-[20px] xl:py-[23px] 2xl:py-[25px] 3xl:py-[31px] py-[34.5px] rounded-radius16 w-[100%]"
                compId="783"
                comWidth={376}
                comHeight={140}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-medium mx-[auto] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[45%]"
                  compId="1074:650"
                  comWidth={170}
                  comHeight={36}
                  compLeft={10}
                  compRight={10}
                  compType="Text"
                >{`Athen Kamsia`}</Text>
                <Text
                  className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[35%]"
                  compId="1074:651"
                  comWidth={132}
                  comHeight={27}
                  compLeft={10}
                  compRight={10}
                  compType="Text"
                >{`Team Member`}</Text>
              </Column>
            </Column>
            <Column
              className="shadow-bs w-[100%]"
              compId="1074:652"
              comWidth={376}
              comHeight={516}
              compLeft={32}
              compRight={0}
              compType="Column"
            >
              <div
                className="bg-gray_400 lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] h-[376px] mx-[auto] rounded-radius16 lg:w-[219px] xl:w-[250px] 2xl:w-[282px] 3xl:w-[338px] w-[376px]"
                compId="1074:655"
                comWidth={376}
                comHeight={376}
                compLeft={0}
                compRight={0}
                compType="View"
              ></div>
              <Column
                className="bg-gray_50 items-center justify-center lg:py-[20px] xl:py-[23px] 2xl:py-[25px] 3xl:py-[31px] py-[34.5px] rounded-radius16 w-[100%]"
                compId="784"
                comWidth={376}
                comHeight={140}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-medium mx-[auto] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[41%]"
                  compId="1074:657"
                  comWidth={155}
                  comHeight={36}
                  compLeft={10}
                  compRight={10}
                  compType="Text"
                >{`Jack Lentera`}</Text>
                <Text
                  className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[35%]"
                  compId="1074:658"
                  comWidth={132}
                  comHeight={27}
                  compLeft={10}
                  compRight={10}
                  compType="Text"
                >{`Team Member`}</Text>
              </Column>
            </Column>
            <Column
              className="shadow-bs w-[100%]"
              compId="1074:659"
              comWidth={376}
              comHeight={516}
              compLeft={32}
              compRight={0}
              compType="Column"
            >
              <div
                className="bg-gray_400 lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] h-[376px] mx-[auto] rounded-radius16 lg:w-[219px] xl:w-[250px] 2xl:w-[282px] 3xl:w-[338px] w-[376px]"
                compId="1074:662"
                comWidth={376}
                comHeight={376}
                compLeft={0}
                compRight={0}
                compType="View"
              ></div>
              <Column
                className="bg-gray_50 items-center justify-center lg:py-[20px] xl:py-[23px] 2xl:py-[25px] 3xl:py-[31px] py-[34.5px] rounded-radius16 w-[100%]"
                compId="785"
                comWidth={376}
                comHeight={140}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-medium mx-[auto] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[49%]"
                  compId="1074:664"
                  comWidth={183}
                  comHeight={36}
                  compLeft={10}
                  compRight={10}
                  compType="Text"
                >{`Ahmad Pucelle`}</Text>
                <Text
                  className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[35%]"
                  compId="1074:665"
                  comWidth={132}
                  comHeight={27}
                  compLeft={10}
                  compRight={10}
                  compType="Text"
                >{`Team Member`}</Text>
              </Column>
            </Column>
          </List>
        </Column>
        <Row
          className="bg-deep_orange_400 font-poppins items-center justify-start xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] w-[100%]"
          compId="776"
          comWidth={1920}
          comHeight={245}
          compLeft={0}
          compRight={0}
          compType="Row"
        >
          <Image
            src={"images/img_newsletter.svg"}
            className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] xl:mb-[49px] 2xl:mb-[55px] 3xl:mb-[66px] mb-[74px] lg:ml-[149px] xl:ml-[170px] 2xl:ml-[192px] 3xl:ml-[230px] ml-[256px] xl:mt-[50px] 2xl:mt-[56px] 3xl:mt-[67px] mt-[75px] lg:my-[43px] object-contain lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px] w-[96px]"
            compId="1074:534"
            comWidth={96}
            comHeight={96}
            compLeft={256}
            compRight={0}
            compType="Image"
            alt="Newsletter"
          />
          <Column
            className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[40px] xl:my-[46px] 2xl:my-[51px] 3xl:my-[62px] my-[69px] w-[33%]"
            compId="1074:542"
            comWidth={637}
            comHeight={107}
            compLeft={32}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-bold font-montserrat lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_50 text-left w-[100%]"
              compId="1074:543"
              comWidth={637}
              comHeight={59}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`Join our newsletter now!`}</Text>
            <Text
              className="font-normal font-poppins mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[75%]"
              compId="1074:544"
              comWidth={480}
              comHeight={32}
              compLeft={0}
              compRight={10}
              compType="Text"
            >{`Register now and get our latest updates and promos.`}</Text>
          </Column>
          <Stack
            className="lg:h-[45px] xl:h-[51px] 2xl:h-[58px] 3xl:h-[69px] h-[76px] 3xl:mb-[75px] mb-[84px] 3xl:ml-[105px] ml-[117px] lg:ml-[68px] xl:ml-[78px] 2xl:ml-[87px] 3xl:mt-[76px] mt-[85px] lg:my-[49px] xl:my-[56px] 2xl:my-[63px] w-[27%]"
            compId="792"
            comWidth={526}
            comHeight={76}
            compLeft={117}
            compRight={0}
            compType="Stack"
          >
            <Input
              className="absolute bg-gray_50 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pb-[15px] pb-[26.545px] lg:pl-[18px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] pl-[32px] lg:pt-[14px] pt-[25.545px] xl:py-[17px] 2xl:py-[19px] 3xl:py-[23px] rounded-radius8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 placeholder:text-gray_500 text-gray_500 text-left tracking-ls1 w-[100%]"
              compId="129"
              comWidth={526}
              comHeight={76}
              compLeft={0}
              compRight={0}
              compType="EditText"
              name="Group129"
              placeholder={`Enter your email`}
            ></Input>
            <Button
              className="absolute bg-gray_800 font-bold h-[max-content] inset-y-[0] my-[auto] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] right-[2%] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[20%]"
              compId="126"
              comWidth={105}
              comHeight={60}
              compLeft={0}
              compRight={8}
              compType="Button"
            >{`Join`}</Button>
          </Stack>
        </Row>
        <footer
          className="font-poppins w-[100%]"
          compId="1074:545"
          comWidth={1920}
          comHeight={585}
          compLeft={0}
          compRight={0}
          compType="Footer"
        >
          <Column
            className="bg-deep_orange_400_cf items-center justify-end w-[100%]"
            compId="780"
            comWidth={1920}
            comHeight={585}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-start justify-start lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[65px] mt-[73px] w-[100%]"
              compId="777"
              comWidth={1920}
              comHeight={260}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="items-start justify-start 2xl:mb-[10px] 3xl:mb-[12px] mb-[14px] lg:mb-[8px] xl:mb-[9px] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] w-[20%]"
                compId="779"
                comWidth={381}
                comHeight={246}
                compLeft={160}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-deep_orange_400 lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left w-[29%]"
                  compId="1074:556"
                  comWidth={112}
                  comHeight={54}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Tronix`}</Text>
                <Text
                  className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                  compId="1074:557"
                  comWidth={381}
                  comHeight={64}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                <Row
                  className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[64%]"
                  compId="1074:592"
                  comWidth={243}
                  comHeight={32}
                  compLeft={0}
                  compRight={10}
                  compType="Row"
                >
                  <Image
                    src={"images/img_call_2.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="1074:593"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Call"
                  />
                  <Text
                    className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[87%]"
                    compId="1074:595"
                    comWidth={211}
                    comHeight={32}
                    compLeft={8}
                    compRight={0}
                    compType="Text"
                  >{`+1234567890`}</Text>
                </Row>
                <Row
                  className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[64%]"
                  compId="1074:596"
                  comWidth={243}
                  comHeight={32}
                  compLeft={0}
                  compRight={10}
                  compType="Row"
                >
                  <Image
                    src={"images/img_email_2.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="1074:597"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Email"
                  />
                  <Text
                    className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[87%]"
                    compId="1074:599"
                    comWidth={211}
                    comHeight={32}
                    compLeft={8}
                    compRight={0}
                    compType="Text"
                  >{`lovia@support.com`}</Text>
                </Row>
              </Column>
              <Column
                className="font-montserrat items-start justify-start lg:ml-[253px] xl:ml-[290px] 2xl:ml-[326px] 3xl:ml-[391px] ml-[435px] w-[6%]"
                compId="1074:558"
                comWidth={120}
                comHeight={260}
                compLeft={435}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                  compId="1074:559"
                  comWidth={120}
                  comHeight={29}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Company`}</Text>
                <Column
                  className="font-poppins items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[67%]"
                  compId="1074:560"
                  comWidth={80}
                  comHeight={199}
                  compLeft={0}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[68%]"
                    compId="1074:561"
                    comWidth={54}
                    comHeight={27}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`About`}</Text>
                  <Text
                    className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                    compId="1074:562"
                    comWidth={80}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Products`}</Text>
                  <Text
                    className="font-normal lg:mr-[3px] 2xl:mr-[4px] xl:mr-[4px] 3xl:mr-[5px] mr-[6px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[93%]"
                    compId="1074:563"
                    comWidth={74}
                    comHeight={27}
                    compLeft={0}
                    compRight={6}
                    compType="Text"
                  >{`Contact`}</Text>
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[50%]"
                    compId="1074:564"
                    comWidth={40}
                    comHeight={27}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Blog`}</Text>
                  <Text
                    className="font-normal lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] mr-[8px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[90%]"
                    compId="1074:565"
                    comWidth={72}
                    comHeight={27}
                    compLeft={0}
                    compRight={8}
                    compType="Text"
                  >{`Careers`}</Text>
                </Column>
              </Column>
              <Column
                className="font-montserrat items-start justify-start lg:mb-[25px] xl:mb-[28px] 2xl:mb-[32px] 3xl:mb-[38px] mb-[43px] xl:ml-[101px] 2xl:ml-[114px] 3xl:ml-[136px] ml-[152px] lg:ml-[88px] w-[9%]"
                compId="1074:566"
                comWidth={164}
                comHeight={217}
                compLeft={152}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[91%]"
                  compId="1074:567"
                  comWidth={150}
                  comHeight={29}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Information`}</Text>
                <Column
                  className="font-poppins lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                  compId="796"
                  comWidth={164}
                  comHeight={156}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-start justify-start w-[100%]"
                    compId="1074:568"
                    comWidth={164}
                    comHeight={156}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[65%]"
                      compId="1074:569"
                      comWidth={107}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Help Center`}</Text>
                    <Text
                      className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                      compId="1074:570"
                      comWidth={164}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Payment Methods`}</Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[88%]"
                      compId="1074:571"
                      comWidth={145}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Return & Refund`}</Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[74%]"
                      compId="1074:572"
                      comWidth={122}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Privacy Policy`}</Text>
                  </Column>
                </Column>
              </Column>
              <Column
                className="font-montserrat items-start justify-start 2xl:mb-[107px] 3xl:mb-[128px] mb-[143px] lg:mb-[83px] xl:mb-[95px] ml-[108px] lg:ml-[63px] xl:ml-[72px] 2xl:ml-[81px] 3xl:ml-[97px] w-[11%]"
                compId="1074:573"
                comWidth={216}
                comHeight={117}
                compLeft={108}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[56%]"
                  compId="1074:574"
                  comWidth={122}
                  comHeight={29}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Follow Us`}</Text>
                <Column
                  className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                  compId="797"
                  comWidth={216}
                  comHeight={56}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_sosmedia_5.svg"}
                    className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] object-cover w-[100%]"
                    compId="1074:575"
                    comWidth={216}
                    comHeight={56}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="sosmedia"
                  />
                </Column>
              </Column>
            </Row>
            <Line
              className="bg-gray_500 h-[1px] 3xl:mt-[114px] mt-[127px] lg:mt-[74px] xl:mt-[84px] 2xl:mt-[95px] mx-[auto] w-[83%]"
              compId="1074:600"
              comWidth={1600}
              comHeight={1}
              compLeft={10}
              compRight={10}
              compType="Line"
            />
            <Row
              className="items-center justify-between lg:mb-[31px] xl:mb-[36px] 2xl:mb-[40px] 3xl:mb-[48px] mb-[54px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] mt-[38px] w-[100%]"
              compId="778"
              comWidth={1920}
              comHeight={32}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-normal lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] mb-[6px] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_800 text-left w-[15%]"
                compId="1074:554"
                comWidth={287}
                comHeight={21}
                compLeft={160}
                compRight={0}
                compType="Text"
              >{`Copyright © 2021 Tronix. All Right Reseved`}</Text>
              <Image
                src={"images/img_payment_2.svg"}
                className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] xl:mr-[106px] 2xl:mr-[120px] 3xl:mr-[144px] mr-[160px] lg:mr-[93px] object-contain w-[7%]"
                compId="1074:547"
                comWidth={128}
                comHeight={32}
                compLeft={0}
                compRight={160}
                compType="Image"
                alt="payment"
              />
            </Row>
          </Column>
        </footer>
      </Column>
    </>
  );
};

export default AboutPage;
