// "use client";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardContent,
//   CardFooter,
// } from "@/components/ui/card";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import { CheckCircle2, XCircle } from "lucide-react";
// import Papa from "papaparse";

// // Load the CSV file (assuming it's named certificates.csv and located in the same directory)
// const loadCSVData = async () => {
//   const response = await fetch("/certificates.csv");
//   const csvText = await response.text();
//   return new Promise((resolve, reject) => {
//     Papa.parse(csvText, {
//       header: true, // Assumes the first row contains headers
//       complete: (result) => resolve(result.data),
//       error: (error) => reject(error),
//     });
//   });
// };

// export default function VerificationCertificate() {
//   const [id, setId] = useState("");
//   const [teamName, setTeamName] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [result, setResult] = useState(null);
//   const [csvData, setCsvData] = useState([]);

//   // Load CSV data on component mount
//   useState(() => {
//     loadCSVData()
//       .then((data) => setCsvData(data))
//       .catch((error) =>
//         setResult({
//           success: false,
//           error: "Failed to load certificate data",
//         })
//       );
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setResult(null);

//     try {
//       // Find the certificate in the CSV data
//       const certificate = csvData.find(
//         (item) => item.id === id && item.teamName === teamName
//       );

//       if (certificate) {
//         setResult({
//           success: true,
//           data: {
//             id: certificate.id,
//             teamName: certificate.teamName,
//             issueDate: certificate.issueDate,
//             position: certificate.position,
//             contribution: certificate.contribution,
//           },
//         });
//       } else {
//         setResult({
//           success: false,
//           error: "Invalid ID or Team name",
//         });
//       }
//     } catch (error) {
//       setResult({
//         success: false,
//         error: "An error occurred during verification",
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen min-w-screen flex justify-center items-center">
//       <Card className="w-full max-w-lg mx-auto">
//         <CardHeader>
//           <CardTitle>Verification Certificate</CardTitle>
//           <CardDescription>
//             Enter the ID and Team name to verify the certificate
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="id">Certificate ID</Label>
//               <Input
//                 id="id"
//                 value={id}
//                 onChange={(e) => setId(e.target.value)}
//                 placeholder="Enter certificate ID"
//                 required
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="teamName">Team Name</Label>
//               <Input
//                 id="teamName"
//                 value={teamName}
//                 onChange={(e) => setTeamName(e.target.value)}
//                 placeholder="Enter team name"
//                 required
//               />
//             </div>
//             <Button
//               type="submit"
//               className="w-full bg-[#2F92D0]"
//               disabled={isLoading}
//             >
//               {isLoading ? "Verifying..." : "Verify Certificate"}
//             </Button>
//           </form>
//         </CardContent>
//         <CardFooter>
//           {result && (
//             <Alert
//               variant={result.success ? "default" : "destructive"}
//               className="mt-4 w-full"
//             >
//               {result.success ? (
//                 <>
//                   <CheckCircle2 className="h-4 w-4" />
//                   <AlertTitle>Verification Successful</AlertTitle>
//                   <AlertDescription>
//                     Certificate ID: {result.data.id}
//                     <br />
//                     Team Name: {result.data.teamName}
//                     <br />
//                     Issue Date: {result.data.issueDate}
//                     <br />
//                     Position: {result.data.position}
//                     <br />
//                     Contribution: {result.data.contribution}
//                   </AlertDescription>
//                 </>
//               ) : (
//                 <>
//                   <XCircle className="h-4 w-4" />
//                   <AlertTitle>Verification Failed</AlertTitle>
//                   <AlertDescription>{result.error}</AlertDescription>
//                 </>
//               )}
//             </Alert>
//           )}
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2, XCircle } from "lucide-react";
import Papa from "papaparse";

// Load the CSV file
const loadCSVData = async () => {
  const response = await fetch("/certificates.csv");
  const csvText = await response.text();
  return new Promise((resolve, reject) => {
    Papa.parse(csvText, {
      header: true,
      complete: (result) => resolve(result.data),
      error: (error) => reject(error),
    });
  });
};

export default function VerificationCertificate() {
  const [id, setId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [csvData, setCsvData] = useState([]);

  // Load CSV data on component mount
  useEffect(() => {
    loadCSVData()
      .then((data) => setCsvData(data))
      .catch(() =>
        setResult({
          success: false,
          error: "Failed to load certificate data",
        })
      );
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);

    try {
      // Find the certificate in the CSV data using string matching
      const certificate = csvData.find((item) => String(item.id) === id);

      if (certificate) {
        setResult({
          success: true,
          data: {
            id: certificate.id,
            name: certificate.name,
            issueDate: certificate.issueDate,
            position: certificate.position,
            contribution: certificate.contribution,
          },
        });
      } else {
        setResult({
          success: false,
          error: "Invalid Certificate ID",
        });
      }
    } catch (error) {
      setResult({
        success: false,
        error: "An error occurred during verification",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center">
      <Card className="w-full max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Verification Certificate</CardTitle>
          <CardDescription>Enter the Certificate ID to verify</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="id">Certificate ID</Label>
              <Input
                id="id"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="Enter certificate ID"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-[#2F92D0]" disabled={isLoading}>
              {isLoading ? "Verifying..." : "Verify Certificate"}
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          {result && (
            <Alert
              variant={result.success ? "default" : "destructive"}
              className="mt-4 w-full"
            >
              {result.success ? (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  <AlertTitle>Verification Successful</AlertTitle>
                  <AlertDescription>
                    Certificate ID: {result.data.id}
                    <br />
                    Name: {result.data.name}
                    <br />
                    Issue Date: {result.data.issueDate}
                    <br />
                    Event/Team: {result.data.position}
                    <br />
                    Achievement/Contribution: {result.data.contribution}
                  </AlertDescription>
                </>
              ) : (
                <>
                  <XCircle className="h-4 w-4" />
                  <AlertTitle>Verification Failed</AlertTitle>
                  <AlertDescription>{result.error}</AlertDescription>
                </>
              )}
            </Alert>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
