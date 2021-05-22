import * as React from "react";
import PageContainer from "../../components/PageContainer";

const RegistryPage = () => {
  return (
    <PageContainer>
      <div className="w-full flex flex-row items-center justify-around flex-wrap">
        <div className="h-42 w-42 flex justify-center items-center hover:shadow-lg border border-primary hover:border-gray-100 rounded-xl">
          <a
            href="https://www.amazon.com/wedding/registry/IORS60L0I2B4?ref=wr_search_page_result_
https://www.amazon.com/wedding/registry/IORS60L0I2B4?ref=wr_search_page_result_"
          >
            <img
              className="h-auto w-auto m-4"
              style={{ maxHeight: 64, maxWidth: 256 }}
              src="/amazon.png"
              alt="Amazon"
            />
          </a>
        </div>
        <div className="h-42 w-42 flex justify-center items-center hover:shadow-lg border border-primary hover:border-gray-100 rounded-xl">
          <a href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/550296613?selectedRLVFilters=_recommended">
            <img
              className="h-auto w-auto m-4"
              style={{ maxHeight: 64, maxWidth: 256 }}
              src="/bbb.png"
              alt="Bed Bath & Beyond"
            />
          </a>
        </div>
        <div className="h-42 w-42 flex justify-center items-center hover:shadow-lg border border-primary hover:border-gray-100 rounded-xl">
          <a href="https://www.target.com/gift-registry/giftgiver?registryId=4a59c7f93a924b02a95bd6f199d1131c&type=WEDDING">
            <img
              className="h-auto w-auto m-4"
              style={{ maxHeight: 128, maxWidth: 256 }}
              src="/target.png"
              alt="Target"
            />
          </a>
        </div>
        <div className="h-42 w-42 flex justify-center items-center hover:shadow-lg border border-primary hover:border-gray-100 rounded-xl">
          <a href="https://www.wayfair.com/registry/wedding/4812560e-c1ee-449c-b097-109675cca65a">
            <img
              className="h-auto w-auto m-4"
              style={{ maxHeight: 192, maxWidth: 256 }}
              src="/wayfair.png"
              alt="Wayfair"
            />
          </a>
        </div>
      </div>
    </PageContainer>
  );
};

export default RegistryPage;
