import * as React from "react";
import Image from "../../components/Image";
import MapLink from "../../components/MapLink";
import PageContainer from "../../components/PageContainer";

const OutOfTownPage = () => {
  return (
    <PageContainer>
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl mb-4">What To Do In Town?</h2>
        <p className="mb-4">There are a few things we like to do in town.</p>
        <div className="flex flex-row justify-start">
          <Image
            width={250}
            height={100}
            position="left"
            src="/wonders-of-wildlife.jpg"
            alt="Wonders Of Wildlife"
          />
          <p className="mb-4">
            The main thing Springfield is probably known for is that it is the
            birthplace of Bass Pro Shops, and home to the{" "}
            <MapLink query="Wonders Of Wildlife National Museum & Aquarium">
              Wonders of Wildlife Museum & Aquarium
            </MapLink>
            . It is a beautiful tour of wildlife and one of the top ranked
            aquariums in the country.
          </p>
        </div>
        <div className="flex flex-row justify-start">
          <p className="mb-4">
            If you are looking to do some shopping, theres no better place in
            Springfield than the{" "}
            <MapLink query="Battlefield Mall Springfield MO">
              Battlefield Mall
            </MapLink>
            . It is full of different stores, and has a full food court.
            Definitely one of the go-to places in town.
          </p>
          <Image
            width={250}
            height={100}
            position="right"
            src="/battlefield-mall.jpg"
            alt="Battlefield Mall"
          />
        </div>

        <h2 className="text-2xl mb-4">Where Should We Eat?</h2>
        <p className="mb-4">
          There are several great restaurants around the Springfield area, just
          depending on what you are in the mood for.
        </p>
        <p className="mb-4">
          We like{" "}
          <MapLink query="Cheddar's Scratch Kitchen, East Primrose Street, Springfield, MO">
            Cheddar's
          </MapLink>{" "}
          for some cheap, comfort food cooking.{" "}
          <MapLink query="Great American Taco Company, E Battlefield Rd, Springfield, MO">
            Great American Taco
          </MapLink>{" "}
          is great spot to find some gourmet tacos and quesadillas, and also
          happens to be where we had our first date. If you are looking for some
          more formal, entertaining restaurants,{" "}
          <MapLink query="Hinode Japanese Steakhouse and Sushi, South National Avenue, Springfield, MO">
            Hinode Hibachi Grill
          </MapLink>{" "}
          is a great spot to find it. If steak or other country food is your
          fancy,{" "}
          <MapLink query="Texas Roadhouse Springfield, MO">
            Texas Roadhouse
          </MapLink>{" "}
          is our go-to. There are a few options for some good burgers, but some
          of our favorites are{" "}
          <MapLink query="Black Sheep Burgers and Shakes">Black Sheep</MapLink>{" "}
          and{" "}
          <MapLink query="BAIR'S All-American Sports Grill">
            Bair's Grill and Bar
          </MapLink>
          .
        </p>
        <p>
          Of course if you still can't find anything to eat, I have made an app
          for the App Store designed to help a group of people find something to
          eat in the area. It's called{" "}
          <a
            className="underline"
            href="https://apps.apple.com/us/app/what-we-having/id1557148763"
          >
            What We Having
          </a>
          , and its free to download and use.
        </p>

        <h2 className="text-2xl mb-4">Where Should I Stay?</h2>
        <div className="flex flex-row justify-start">
          <Image
            width={250}
            height={100}
            position="left"
            src="/courtyard-by-marriott.jpg"
            alt="Courtyard By Marriott"
          />
          <p className="mb-4">
            There are two spots we would recommend here in town. The first is
            the{" "}
            <MapLink query="Courtyard by Marriott Springfield Airport">
              Courtyard Hotel by the Springfield Airport
            </MapLink>
            , which is the closest hotel in Springfield to the venue.
          </p>
        </div>
        <div className="flex flex-row justify-start">
          <p className="mb-4">
            The other we would recommend would be{" "}
            <MapLink query="Fairfield Inn & Suites by Marriott Springfield North">
              Fairfield Inn & Suites Hotel
            </MapLink>
            , which is just a nice hotel up by I-44 and Highway 65, and is close
            to a lot of other restaurants.
          </p>

          <Image
            width={250}
            height={100}
            position="right"
            src="/fairfield-inn.jpg"
            alt="Fairfield Inn"
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default OutOfTownPage;
