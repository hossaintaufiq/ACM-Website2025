import React from 'react';
// -------------- ex executive components ------------
import Ex_executive2023 from "../../app/chapter-officers/ex_eb/Ex_executive_2023"
import Ex_executive2022 from "../../app/chapter-officers/ex_eb/Ex_executive_2022"
import Ex_executive2021 from "../../app/chapter-officers/ex_eb/Ex_executive_2021"
import Ex_executive2020 from "../../app/chapter-officers/ex_eb/Ex_executive_2020"
import Ex_executive2019 from "../../app/chapter-officers/ex_eb/Ex_executive_2019"
import Ex_executive2018 from "../../app/chapter-officers/ex_eb/Ex_executive_2018"
import Ex_executive2017 from "../../app/chapter-officers/ex_eb/Ex_executive_2017"
import Acting_panel_2023_2024 from "../../app/chapter-officers/ex_eb/Acting_panel_2023_2024"
import ExFacultySponsor from '@/app/chapter-officers/ex_faculty_sponsor/ExFacultySponsor';
import Ex_executive2024 from "../../app/chapter-officers/ex_eb/Ex_executive_2024"

const ExExecutive = () => {
    return (
        <div>
            <h1 className="text-lg text-center mb-20 md:text-3xl lg:text-5xl mt-10">EX-EXECUTIVE PANEL</h1>
            <ExFacultySponsor></ExFacultySponsor>
            <Ex_executive2024></Ex_executive2024>
            <Acting_panel_2023_2024></Acting_panel_2023_2024>
            <Ex_executive2023></Ex_executive2023>
            <Ex_executive2022></Ex_executive2022>
            <Ex_executive2021></Ex_executive2021>
            <Ex_executive2020></Ex_executive2020>
            <Ex_executive2019></Ex_executive2019>
            <Ex_executive2018></Ex_executive2018>
            <Ex_executive2017></Ex_executive2017>
        </div>
    );
};

export default ExExecutive;